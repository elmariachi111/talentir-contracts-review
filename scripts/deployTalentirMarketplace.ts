import { ethers } from 'hardhat'
import { verifyEtherscan } from './utils'

async function main (): Promise<void> {

  // it's not a good idea to hard code the nft address here.
  // since hh scripts aren't taking arguments you either could write a script that deploys everything at once
  // or hand it in as env var. This address isn't updateable on the contract
  // so you'll never be able to change it once constructed ;) 
  const nftAddress = '0x7C99cAD32B8dd40a4a7eCCcc18640E170cC3Bd53'
  //const nftAddress = process.env.NFT_ADDRESS
  
  const TalentirMarketplace = await ethers.getContractFactory(
    'TalentirMarketplaceV0'
  )
  const talentirMarketplace = await TalentirMarketplace.deploy(nftAddress)
  const talentirMarketplaceReceipt =
    await talentirMarketplace.deployTransaction.wait()
  console.log(
    'TalentirMarketplace deployed to:',
    talentirMarketplace.address,
    ' on block: ',
    talentirMarketplaceReceipt.blockNumber
  )

  await verifyEtherscan(
    talentirMarketplace.address,
    talentirMarketplace.deployTransaction,
    [nftAddress, '0']
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
