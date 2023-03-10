import { ethers } from 'hardhat'
import { TalentirMarketplaceV0__factory, TalentirTokenV0__factory } from '../typechain-types'

async function main (): Promise<void> {
  const tokenAddress = '0x7C99cAD32B8dd40a4a7eCCcc18640E170cC3Bd53'
  const marketplaceAddress = '0xe184eeD49db54C5e04e2deFcAc0fC2C361eF1Af7'

  const signer = await ethers.getSigners()
  const talentirNFTFactory = new TalentirTokenV0__factory(signer[0])
  const talentirNFT = talentirNFTFactory.attach(tokenAddress)

  const talentirMarketplaceFactory = new TalentirMarketplaceV0__factory(signer[0])
  const talentirMarketplace = talentirMarketplaceFactory.attach(marketplaceAddress)

  const tx1 = await talentirNFT.setNftMarketplaceApproval(marketplaceAddress, true)
  console.log('TalentirNFT: Approved marketplace: ', marketplaceAddress, ' tx:', tx1.hash)

  // Grant the Openzeppelin Relay the Minter Role
  const relayAddress = '0x79e08374a52c6e917c7b4808559b17a9f606d9b0'
  const tx3 = await talentirNFT.setMinterRole(relayAddress)
  console.log('TalentirNFT: Granted Minter Role to: ', relayAddress, ' tx:', tx3.hash)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
