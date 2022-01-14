//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

/// @custom:security-contact security@talentir.com
contract TalentirRoyalties is ERC165, IERC2981 {
    mapping(uint256 => address) internal _royaltyReceivers;
    uint256 constant internal ROYALTIES_PERCENTAGE = 10;

    function royaltyInfo(uint256 tokenId, uint256 value)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        require(_royaltyReceivers[tokenId] != address(0), "No royalty info found for address.");
        receiver = _royaltyReceivers[tokenId];
        royaltyAmount = (value * ROYALTIES_PERCENTAGE) / 100;
    }

    function updateRoyaltyReceiver(uint256 tokenId, address newRoyaltyReceiver)
        public
    {
        address currentReceiver = _royaltyReceivers[tokenId];
        require(currentReceiver == msg.sender, "Only current royalty receiver can update.");
        _setRoyaltyReceiver(tokenId, newRoyaltyReceiver);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return
            interfaceId == type(IERC2981).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function _setRoyaltyReceiver(uint256 tokenID, address receiver) 
        internal
    {
        _royaltyReceivers[tokenID] = receiver;
    }
}