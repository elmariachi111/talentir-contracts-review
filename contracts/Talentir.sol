// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./TalentirRoyalties.sol";

/// @custom:security-contact jk@talentir.com
contract Talentir is ERC721, ERC721URIStorage, AccessControl, TalentirRoyalties {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC721("Talentir", "TAL") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    address private _marketplaceAddress;

    function tokenUriToTokenID(string memory uri) 
        public
        pure
        returns (uint256) 
    {
        return uint256(keccak256(abi.encodePacked((uri))));
    }

    function updateMarketplaceAddress(address newAddress) public onlyRole(DEFAULT_ADMIN_ROLE)
    {   
        _marketplaceAddress = newAddress;
    }

    /**
     * Safely mint a new token. The tokenId is calculated from the keccak256
     * hash of the provided uri. This ensures that no duplicate uri's can be
     * minted.
     */
    function mint(address to, string memory uri, address royaltyReceiver)
        public
        onlyRole(MINTER_ROLE)
    {
        uint256 tokenId = tokenUriToTokenID(uri);
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setRoyaltiyReceiver(royaltyReceiver, tokenId);
    }

    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {
        return _marketplaceAddress == operator || super.isApprovedForAll(owner, operator);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl, TalentirRoyalties)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}