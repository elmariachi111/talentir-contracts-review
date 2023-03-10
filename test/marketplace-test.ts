import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { ethers } from 'hardhat'
// eslint-disable-next-line
import { TalentirTokenV0, TalentirMarketplaceV0 } from "../typechain-types";

describe('Marketplace Tests', function () {
  let talentirNFT: TalentirTokenV0
  let marketplace: TalentirMarketplaceV0
  let owner: SignerWithAddress
  let buyer: SignerWithAddress
  let seller: SignerWithAddress
  let royaltyReceiver: SignerWithAddress
  let talentirFeeReceiver: SignerWithAddress
  const BUY = 0
  const SELL = 1
  const someEther = ethers.utils.parseEther('0.0000000001') // full Ether causes overflow in etherBalanceToChange function

  beforeEach(async function () {
    [owner, buyer, seller, royaltyReceiver, talentirFeeReceiver] =
      await ethers.getSigners()
    const TalentirNFTFactory = await ethers.getContractFactory(
      'TalentirTokenV0'
    )
    talentirNFT = await TalentirNFTFactory.deploy()
    await talentirNFT.deployed()
    const MarketplaceFactory = await ethers.getContractFactory(
      'TalentirMarketplaceV0'
    )
//todo: it's not good practice to put assertions in non-test methods. move them to their own test case
    await expect(MarketplaceFactory.deploy(owner.address)).to.be.reverted
    marketplace = await MarketplaceFactory.deploy(talentirNFT.address)
    await marketplace.deployed()
    // Can't mint token before minter role is set
    await expect(
      talentirNFT.mint(seller.address, 'abc', 'abc', royaltyReceiver.address)
    ).to.be.revertedWith('Not allowed')
    // Set minter role to owner
    await talentirNFT.setMinterRole(owner.address)
  })
//todo: this test tests far too many things. Split this into use cases
  it('should open and close a single order (no fees)', async function () {
    // Set royalties to 0 (will be tested later)
    await expect(talentirNFT.setRoyalty(0)).to.emit(
      talentirNFT,
      'RoyaltyPercentageChanged'
    )
    // Non-token owner can't place sell order
    await expect(
      marketplace.connect(seller).makeSellOrder(1, 1, 1, true)
    ).to.be.revertedWith('ERC1155: caller is not token owner or approved')
    // Mint token to seller
    await talentirNFT.mint(
      seller.address,
      'abcd',
      'abc',
      royaltyReceiver.address
    )
    const tokenId = await talentirNFT.contentIdToTokenId('abc')
    expect(await talentirNFT.balanceOf(seller.address, tokenId)).to.equal(
      1000000
    )
    // Still can't make sell order because of missing allowance
    await expect(
      marketplace.connect(seller).makeSellOrder(1, 1, 1, true)
    ).to.be.revertedWith('ERC1155: caller is not token owner or approved')
    // Grant allowance and make sell order
    await expect(
      talentirNFT.setNftMarketplaceApproval(marketplace.address, true)
    ).to.emit(talentirNFT, 'MarketplaceApproved')
    // Can't add orders with 0 quantity or price
    await expect(
      marketplace.connect(seller).makeSellOrder(tokenId, someEther, 0, true)
    ).to.be.revertedWith('Token quantity must be positive')
    await expect(
      marketplace.connect(seller).makeSellOrder(tokenId, 0, 1, true)
    ).to.be.revertedWith('Price must be positive')
    await expect(
      marketplace.connect(seller).makeSellOrder(tokenId, 0, 0, true)
    ).to.be.revertedWith('Price must be positive')

    await expect(
      marketplace
        .connect(buyer)
        .makeBuyOrder(tokenId, 0, false, { value: 1000 })
    ).to.be.revertedWith('Token quantity must be positive')
    await expect(
      marketplace.connect(buyer).makeBuyOrder(tokenId, 1, false, { value: 0 })
    ).to.be.revertedWith('Price must be positive')
    await expect(
      marketplace.connect(buyer).makeBuyOrder(tokenId, 0, false, { value: 0 })
    ).to.be.revertedWith('Price must be positive')
    // Can't add order with rounding problem
    await expect(
      marketplace.connect(seller).makeSellOrder(tokenId, 1, 2, true)
//todo to avoid that, I'd rather require ETHquantity larger than a certain value (buying for 1 wei is pointless anyway)
    ).to.be.revertedWith('Rounding problem')

//todo: here the happy path starts. Consider cutting the test case here.
    // Add order to orderbook
    await expect(
      marketplace.connect(seller).makeSellOrder(tokenId, someEther, 1, true)
    ).to.emit(marketplace, 'OrderAdded')
    let bestOrder = await marketplace.getBestOrder(tokenId, SELL)
    let order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(1)
    expect(bestOrder[1]).to.equal(someEther)
    expect(order.tokenId).to.equal(tokenId)
    expect(order.side).to.equal(SELL)
    expect(order.sender).to.equal(seller.address)
    expect(order.price).to.equal(someEther)
    expect(order.quantity).to.equal(1)
    // Balances are updated
    expect(await talentirNFT.balanceOf(seller.address, tokenId)).to.equal(
      999_999
    )
    expect(await talentirNFT.balanceOf(marketplace.address, tokenId)).to.equal(
      1
    )
    // Buyer makes a buy order with too low price, not added to order book -> nothing happens
    await expect(
      async () =>
        await marketplace
          .connect(buyer)
          .makeBuyOrder(tokenId, 1, false, { value: 1000 })
    ).to.changeEtherBalances([buyer, marketplace], [0, 0])
    bestOrder = await marketplace.getBestOrder(tokenId, BUY)
    order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(0)
    expect(bestOrder[1]).to.equal(0)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)

    // Buyer makes a partial buy order with too low price, added to order book
    await expect(
      async () =>
        await marketplace
          .connect(buyer)
          .makeBuyOrder(tokenId, 1, true, { value: 1000 })
    ).to.changeEtherBalances([buyer, marketplace], [-1000, 1000])
    bestOrder = await marketplace.getBestOrder(tokenId, BUY)
    order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(2)
    expect(bestOrder[1]).to.equal(1000)
    expect(order.tokenId).to.equal(tokenId)
    expect(order.side).to.equal(BUY)
    expect(order.sender).to.equal(buyer.address)
    expect(order.price).to.equal(1000)
    expect(order.quantity).to.equal(1)

    // Buyer makes a buy order with higher price than asked, executes, removes executed order and refunds the excess Ether
    const buyTransaction = marketplace
      .connect(buyer)
      .makeBuyOrder(tokenId, 1, false, { value: someEther.mul(2) })

    await expect(buyTransaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await buyTransaction).to.changeEtherBalances(
      [buyer, seller],
      [-someEther, someEther]
    )

    bestOrder = await marketplace.getBestOrder(tokenId, SELL)
    order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(0)
    expect(bestOrder[1]).to.equal(0)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)
    // Balances are updated
    expect(await talentirNFT.balanceOf(seller.address, tokenId)).to.equal(
      999999
    )
    expect(await talentirNFT.balanceOf(buyer.address, tokenId)).to.equal(1)
    expect(await talentirNFT.balanceOf(marketplace.address, tokenId)).to.equal(
      0
    )

    // Second buy order is still open on the order book
    bestOrder = await marketplace.getBestOrder(tokenId, BUY)
    order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(2)
    expect(bestOrder[1]).to.equal(1000)
    expect(order.tokenId).to.equal(tokenId)
    expect(order.side).to.equal(BUY)
    expect(order.sender).to.equal(buyer.address)
    expect(order.price).to.equal(1000)
    expect(order.quantity).to.equal(1)

    // Create a sell order that fills the buy order
    const transaction = marketplace
      .connect(seller)
      .makeSellOrder(tokenId, 1000, 1, false)

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, seller],
      [-1000, 1000]
    )

    // Order is removed
    bestOrder = await marketplace.getBestOrder(tokenId, BUY)
    order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(0)
    expect(bestOrder[1]).to.equal(0)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)
    // Balances are updated
    expect(await talentirNFT.balanceOf(seller.address, tokenId)).to.equal(
      999_998
    )
    expect(await talentirNFT.balanceOf(buyer.address, tokenId)).to.equal(2)
  })

  it('should distribute fees correctly', async function () {
    // Grant marketplace approval
    await expect(
      talentirNFT.setNftMarketplaceApproval(marketplace.address, true)
    ).to.emit(talentirNFT, 'MarketplaceApproved')
    // Mint token to seller
    await talentirNFT.mint(
      seller.address,
      'abcd',
      'abc',
      royaltyReceiver.address
    )
    const tokenId = await talentirNFT.contentIdToTokenId('abc')
    expect(await talentirNFT.balanceOf(seller.address, tokenId)).to.equal(
      1_000_000
    )
    // Non-owner can't set fees
    await expect(
      marketplace.connect(buyer).setTalentirFee(1, talentirFeeReceiver.address)
    ).to.be.revertedWith('Ownable: caller is not the owner')
    await expect(talentirNFT.connect(buyer).setRoyalty(1)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )
    // Can't set too high fees
    await expect(
      marketplace.setTalentirFee(10001, talentirFeeReceiver.address)
    ).to.be.revertedWith('Must be <=10k')
    // Set fees
    await expect(
      marketplace.setTalentirFee(10000, talentirFeeReceiver.address)
    ).to.emit(marketplace, 'TalentirFeeSet')
    await expect(talentirNFT.setRoyalty(100)).to.emit(
      talentirNFT,
      'RoyaltyPercentageChanged'
    )
    await expect(talentirNFT.setRoyalty(5000)).to.emit(
      talentirNFT,
      'RoyaltyPercentageChanged'
    )
    // Non-royalty-receiver can't update royalties
    await expect(
      talentirNFT.updateTalent(tokenId, seller.address)
    ).to.be.revertedWith('Royalty receiver must update')
    // Royalty-receiver can update royalties
    await expect(
      talentirNFT.connect(royaltyReceiver).updateTalent(tokenId, seller.address)
    ).to.emit(talentirNFT, 'TalentChanged')
    await expect(
      talentirNFT.connect(seller).updateTalent(tokenId, royaltyReceiver.address)
    ).to.emit(talentirNFT, 'TalentChanged')
    // Execute order, check that fees are distributed
    await expect(
      marketplace.connect(seller).makeSellOrder(tokenId, 1000, 1, true)
    ).to.emit(marketplace, 'OrderAdded')
    const transaction = marketplace
      .connect(buyer)
      .makeBuyOrder(tokenId, 1, true, { value: 1000 })

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [buyer, seller, talentirFeeReceiver, royaltyReceiver],
      [-1000, 850, 100, 50]
    )
  })

  it('should handle multiple orders', async function () {
    // Set royalties to 0 (tested separately)
    await expect(talentirNFT.setRoyalty(0)).to.emit(
      talentirNFT,
      'RoyaltyPercentageChanged'
    )
    // Mint token to seller
    await talentirNFT.mint(
      seller.address,
      'abcd',
      'abc',
      royaltyReceiver.address
    )
    const tokenId = await talentirNFT.contentIdToTokenId('abc')
    expect(await talentirNFT.balanceOf(seller.address, tokenId)).to.equal(
      1000000
    )
    // Grant allowance
    await expect(
      talentirNFT.setNftMarketplaceApproval(marketplace.address, true)
    ).to.emit(talentirNFT, 'MarketplaceApproved')
    // Add multiple buy and sell orders
    for (let i = 5; i <= 10; i++) {
      await expect(
        marketplace
          .connect(seller)
          .makeSellOrder(
            tokenId,
            someEther.mul(2 * i).add(someEther.mul(20)),
            2,
            true
          )
      ).to.emit(marketplace, 'OrderAdded')

      const transaction = marketplace
        .connect(buyer)
        .makeBuyOrder(tokenId, 2, true, { value: someEther.mul(i * 2) })

      await expect(transaction).to.emit(marketplace, 'OrderAdded')

      await expect(await transaction).to.changeEtherBalances(
        [marketplace, buyer],
        [someEther.mul(i * 2), -someEther.mul(i * 2)]
      )
    }

    // Add another order at the best price
    let transaction = marketplace.makeBuyOrder(tokenId, 2, true, {
      value: someEther.mul(20)
    })

    await expect(transaction).to.emit(marketplace, 'OrderAdded')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, owner],
      [someEther.mul(20), -someEther.mul(20)]
    )
    // Check FIFO: best order should be the one added first, and that one shuld be executed
    let bestOrderId = await marketplace.getBestOrder(tokenId, BUY)
    let bestOrder = await marketplace.orders(bestOrderId[0])
    expect(bestOrder.sender).to.equal(buyer.address)
    transaction = marketplace
      .connect(seller)
      .makeSellOrder(tokenId, someEther.mul(10), 2, true)

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, seller],
      [-someEther.mul(20), someEther.mul(20)]
    )

    // New best order is the second one
    bestOrderId = await marketplace.getBestOrder(tokenId, BUY)
    bestOrder = await marketplace.orders(bestOrderId[0])
    expect(bestOrder.sender).to.equal(owner.address)

    // Partially fill the buy orders
    transaction = marketplace
      .connect(seller)
      .makeSellOrder(tokenId, someEther, 1, false)

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, seller],
      [-someEther.mul(10), someEther.mul(10)]
    )

    bestOrderId = await marketplace.getBestOrder(tokenId, BUY)
    bestOrder = await marketplace.orders(bestOrderId[0])
    expect(bestOrder.quantity).to.equal(1)

    // Partially fill the sell orders
    transaction = marketplace
      .connect(buyer)
      .makeBuyOrder(tokenId, 1, false, { value: someEther.mul(15) })

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [buyer, seller],
      [-someEther.mul(15), someEther.mul(15)]
    )

    bestOrderId = await marketplace.getBestOrder(tokenId, SELL)
    bestOrder = await marketplace.orders(bestOrderId[0])
    expect(bestOrder.quantity).to.equal(1)

    // Overfill the buy orders
    transaction = marketplace
      .connect(seller)
      .makeSellOrder(tokenId, someEther, 2, false)

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, seller],
      [-someEther.mul(19), someEther.mul(19)] // 10+9=19
    )

    bestOrderId = await marketplace.getBestOrder(tokenId, BUY)
    bestOrder = await marketplace.orders(bestOrderId[0])
    expect(bestOrder.quantity).to.equal(1)

    // Overfill the sell orders
    transaction = marketplace
      .connect(buyer)
      .makeBuyOrder(tokenId, 2, false, { value: someEther.mul(50) })

    await expect(transaction).to.emit(marketplace, 'OrderExecuted')

    await expect(await transaction).to.changeEtherBalances(
      [buyer, seller],
      [-someEther.mul(31), someEther.mul(31)] // 15+16=31
    )

    bestOrderId = await marketplace.getBestOrder(tokenId, SELL)
    bestOrder = await marketplace.orders(bestOrderId[0])
    expect(bestOrder.quantity).to.equal(1)
  })

  it('should pause and cancel', async function () {
    // Make sell order
    await talentirNFT.mint(
      owner.address,
      'abcd',
      'abc',
      royaltyReceiver.address
    )
    const tokenId = await talentirNFT.contentIdToTokenId('abc')
    expect(await talentirNFT.balanceOf(owner.address, tokenId)).to.equal(
      1000000
    )
    await expect(
      talentirNFT.setNftMarketplaceApproval(marketplace.address, true)
    ).to.emit(talentirNFT, 'MarketplaceApproved')
    await expect(marketplace.makeSellOrder(tokenId, someEther, 1, true)).to.emit(
      marketplace,
      'OrderAdded'
    )

    // Make buy order
    let transaction = marketplace.makeBuyOrder(tokenId, 1, true, {
      value: 1
    })

    await expect(transaction).to.emit(marketplace, 'OrderAdded')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, owner],
      [1, -1]
    )

    // Non-owner can't pause
    await expect(marketplace.connect(seller).pause()).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )
    // Pause contract
    await expect(marketplace.pause()).to.emit(marketplace, 'Paused')
    // Can't make buy or sell orders
    await expect(
      marketplace.makeBuyOrder(tokenId, 1, true, {
        value: someEther
      })
    ).to.be.revertedWith('Pausable: paused')
    await expect(
      marketplace.makeSellOrder(tokenId, someEther, 1, true)
    ).to.be.revertedWith('Pausable: paused')
    // Other user can't cancel order on behalf of others
    await expect(
      marketplace.connect(seller).cancelOrders([1])
    ).to.be.revertedWith('Wrong user')
    // Can still cancel orders
    transaction = marketplace.cancelOrders([1, 2])

    await expect(transaction).to.emit(marketplace, 'OrderCancelled')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, owner],
      [-1, 1]
    )
    // // Order is removed
    let bestOrder = await marketplace.getBestOrder(tokenId, SELL)
    let order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(0)
    expect(bestOrder[1]).to.equal(0)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)

    bestOrder = await marketplace.getBestOrder(tokenId, BUY)
    order = await marketplace.orders(bestOrder[0])
    expect(bestOrder[0]).to.equal(0)
    expect(bestOrder[1]).to.equal(0)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)

    order = await marketplace.orders(1)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)

    order = await marketplace.orders(2)
    expect(order.side).to.equal(0)
    expect(order.price).to.equal(0)
    expect(order.quantity).to.equal(0)

    // Non-owner can't unpause
    await expect(marketplace.connect(seller).unpause()).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )
    // Unpause contract
    await expect(marketplace.unpause()).to.emit(marketplace, 'Unpaused')
    // Can make orders again
    await expect(marketplace.makeSellOrder(tokenId, someEther, 1, true)).to.emit(
      marketplace,
      'OrderAdded'
    )
    transaction = marketplace.makeBuyOrder(tokenId, 1, true, {
      value: 1
    })

    await expect(transaction).to.emit(marketplace, 'OrderAdded')

    await expect(await transaction).to.changeEtherBalances(
      [marketplace, owner],
      [1, -1]
    )
  })

  const contentIdToTokenIdLocal = (tokenId: string) => {
    return ethers.BigNumber.from(ethers.utils.keccak256(ethers.utils.solidityPack(["string"], [tokenId])));
  }
  it('can create token ids locally', async function() {
    expect(
      contentIdToTokenIdLocal("abc").eq(
        await talentirNFT.contentIdToTokenId('abc')
      )
    );
  })

  it('gas costs dont depend on order tree size', async function () {
    await talentirNFT.setNftMarketplaceApproval(marketplace.address, true)
    const mintPromises= [1,2,3,4,5,6,7,8,9,10].map(num => (async() => {
      await talentirNFT.mint(
        seller.address,
        'Qmabcd',
        `abc${num}`,
        royaltyReceiver.address
      )

      return contentIdToTokenIdLocal(`abc${num}`)
    })())
    
    const tokenIds = await Promise.all(mintPromises);

    const sellOrders = await Promise.all(tokenIds.map(tokenId => (async() => {
      const tx = await marketplace.connect(seller).makeSellOrder(tokenId, someEther, 1000, true)
      const receipt = await tx.wait();
      let bestOrder = await marketplace.getBestOrder(tokenId, SELL)
      let order = await marketplace.orders(bestOrder[0])
      return {gas: receipt.gasUsed, order}
    })()))

    let baseGas = sellOrders[1].gas;
    console.log("[gas] create sell order ", baseGas)
    sellOrders.slice(1).map(so => {
      expect(baseGas.eq(so.gas)).to.be.true
    })

    const otherBuyer = (await ethers.getSigners())[5];
    const buyOrders = await Promise.all(tokenIds.map(tokenId => (async() => {
      const tx = await marketplace.connect(buyer).makeBuyOrder(tokenId, 500, true, {value: someEther.div(2)})
      const receipt = await tx.wait();
      const bal =  await talentirNFT.balanceOf(buyer.address, tokenId);
      expect(bal.toNumber()).equal(500);

      const receipt2 = await (await marketplace.connect(otherBuyer).makeBuyOrder(tokenId, 500, true, {value: someEther.div(2)})).wait()
      expect((await talentirNFT.balanceOf(otherBuyer.address, tokenId)).toNumber()).equal(500);


      return {gas1: receipt.gasUsed, gas2: receipt2.gasUsed}

    })()))
    
    baseGas = buyOrders[1].gas1;
    console.log("[gas] partially buy sell order ", baseGas)
    buyOrders.slice(1,8).map(so => { //the first and last transaction is slightly different
      expect(baseGas.eq(so.gas1)).to.be.true
    })

  })
})
