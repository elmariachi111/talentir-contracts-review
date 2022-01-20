/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Talentir, TalentirInterface } from "../Talentir";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
      {
        internalType: "address",
        name: "royaltyReceiver",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "tokenCidToTokenID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateMarketplaceAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newRoyaltyReceiver",
        type: "address",
      },
    ],
    name: "updateRoyaltyReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260088152672a30b632b73a34b960c11b60208083019182528351808501909452600384526215105360ea1b9084015281519192916200005d916000916200015c565b508051620000739060019060208401906200015c565b506200008591506000905033620000b7565b620000b17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000b7565b6200023f565b60008281526007602090815260408083206001600160a01b038516845290915290205460ff16620001585760008281526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001173390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b8280546200016a9062000202565b90600052602060002090601f0160209004810192826200018e5760008555620001d9565b82601f10620001a957805160ff1916838001178555620001d9565b82800160010185558215620001d9579182015b82811115620001d9578251825591602001919060010190620001bc565b50620001e7929150620001eb565b5090565b5b80821115620001e75760008155600101620001ec565b600181811c908216806200021757607f821691505b602082108114156200023957634e487b7160e01b600052602260045260246000fd5b50919050565b612099806200024f6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de578063b88d4fde11610097578063d547741f11610071578063d547741f14610373578063e4ace31a14610386578063e985e9c514610399578063fa8509c8146103ac57600080fd5b8063b88d4fde14610326578063c87b56dd14610339578063d53913931461034c57600080fd5b806370a08231146102ca5780638e5dca65146102dd57806391d14854146102f057806395d89b4114610303578063a217fddf1461030b578063a22cb4651461031357600080fd5b80632a55205a116101305780632a55205a146102395780632f2ff15d1461026b578063354c85aa1461027e57806336568abe1461029157806342842e0e146102a45780636352211e146102b757600080fd5b806301ffc9a71461017857806306fdde03146101a0578063081812fc146101b5578063095ea7b3146101e057806323b872dd146101f5578063248a9ca314610208575b600080fd5b61018b610186366004611c8e565b6103bf565b60405190151581526020015b60405180910390f35b6101a86103d0565b6040516101979190611e43565b6101c86101c3366004611c54565b610462565b6040516001600160a01b039091168152602001610197565b6101f36101ee366004611c2b565b6104ef565b005b6101f3610203366004611ae1565b610605565b61022b610216366004611c54565b60009081526007602052604090206001015490565b604051908152602001610197565b61024c610247366004611cf9565b610636565b604080516001600160a01b039093168352602083019190915201610197565b6101f3610279366004611c6c565b6106e1565b6101f361028c366004611c6c565b610707565b6101f361029f366004611c6c565b61078a565b6101f36102b2366004611ae1565b610808565b6101c86102c5366004611c54565b610823565b61022b6102d8366004611a9e565b61089a565b61022b6102eb366004611cc6565b610921565b61018b6102fe366004611c6c565b610952565b6101a861097d565b61022b600081565b6101f3610321366004611b95565b61098c565b6101f3610334366004611b1c565b610997565b6101a8610347366004611c54565b6109cf565b61022b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101f3610381366004611c6c565b610b55565b6101f3610394366004611a9e565b610b7b565b61018b6103a7366004611ab8565b610baa565b6101f36103ba366004611bcf565b610bf5565b60006103ca82610c52565b92915050565b6060600080546103df90611f9e565b80601f016020809104026020016040519081016040528092919081815260200182805461040b90611f9e565b80156104585780601f1061042d57610100808354040283529160200191610458565b820191906000526020600020905b81548152906001019060200180831161043b57829003601f168201915b5050505050905090565b600061046d82610c77565b6104d35760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104fa82610823565b9050806001600160a01b0316836001600160a01b031614156105685760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016104ca565b336001600160a01b038216148061058457506105848133610baa565b6105f65760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104ca565b6106008383610c94565b505050565b61060f3382610d02565b61062b5760405162461bcd60e51b81526004016104ca90611ea8565b610600838383610dc4565b60008281526008602052604081205481906001600160a01b03166106a75760405162461bcd60e51b815260206004820152602260248201527f4e6f20726f79616c747920696e666f20666f756e6420666f7220616464726573604482015261399760f11b60648201526084016104ca565b6000848152600860205260409020546001600160a01b0316915060646106ce600a85611f25565b6106d89190611f11565b90509250929050565b6000828152600760205260409020600101546106fd8133610f64565b6106008383610fc8565b6000828152600860205260409020546001600160a01b03163381146107805760405162461bcd60e51b815260206004820152602960248201527f4f6e6c792063757272656e7420726f79616c747920726563656976657220636160448201526837103ab83230ba329760b91b60648201526084016104ca565b610600838361104e565b6001600160a01b03811633146107fa5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104ca565b610804828261107c565b5050565b61060083838360405180602001604052806000815250610997565b6000818152600260205260408120546001600160a01b0316806103ca5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016104ca565b60006001600160a01b0382166109055760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016104ca565b506001600160a01b031660009081526003602052604090205490565b6000816040516020016109349190611d46565b60408051601f19818403018152919052805160209091012092915050565b60009182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600180546103df90611f9e565b6108043383836110e3565b6109a13383610d02565b6109bd5760405162461bcd60e51b81526004016104ca90611ea8565b6109c9848484846111b2565b50505050565b60606109da82610c77565b610a405760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016104ca565b60008281526006602052604081208054610a5990611f9e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8590611f9e565b8015610ad25780601f10610aa757610100808354040283529160200191610ad2565b820191906000526020600020905b815481529060010190602001808311610ab557829003601f168201915b505050505090506000610aff604080518082019091526007815266697066733a2f2f60c81b602082015290565b9050805160001415610b12575092915050565b815115610b44578082604051602001610b2c929190611d62565b60405160208183030381529060405292505050919050565b610b4d846111e5565b949350505050565b600082815260076020526040902060010154610b718133610f64565b610600838361107c565b6000610b878133610f64565b50600980546001600160a01b0319166001600160a01b0392909216919091179055565b6009546000906001600160a01b0383811691161480610bee57506001600160a01b0380841660009081526005602090815260408083209386168352929052205460ff165b9392505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610c208133610f64565b6000610c2b84610921565b9050610c3785826112cb565b610c4181856112e5565b610c4b818461104e565b5050505050565b60006001600160e01b0319821663152a902d60e11b14806103ca57506103ca82611370565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610cc982610823565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d0d82610c77565b610d6e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016104ca565b6000610d7983610823565b9050806001600160a01b0316846001600160a01b03161480610db45750836001600160a01b0316610da984610462565b6001600160a01b0316145b80610b4d5750610b4d8185610baa565b826001600160a01b0316610dd782610823565b6001600160a01b031614610e3f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016104ca565b6001600160a01b038216610ea15760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104ca565b610eac600082610c94565b6001600160a01b0383166000908152600360205260408120805460019290610ed5908490611f44565b90915550506001600160a01b0382166000908152600360205260408120805460019290610f03908490611ef9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610f6e8282610952565b61080457610f86816001600160a01b03166014611395565b610f91836020611395565b604051602001610fa2929190611d91565b60408051601f198184030181529082905262461bcd60e51b82526104ca91600401611e43565b610fd28282610952565b6108045760008281526007602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561100a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60009182526008602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6110868282610952565b156108045760008281526007602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b816001600160a01b0316836001600160a01b031614156111455760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104ca565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6111bd848484610dc4565b6111c984848484611577565b6109c95760405162461bcd60e51b81526004016104ca90611e56565b60606111f082610c77565b6112545760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016104ca565b600061127a604080518082019091526007815266697066733a2f2f60c81b602082015290565b9050600081511161129a5760405180602001604052806000815250610bee565b806112a484611684565b6040516020016112b5929190611d62565b6040516020818303038152906040529392505050565b61080482826040518060200160405280600081525061179e565b6112ee82610c77565b6113515760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016104ca565b6000828152600660209081526040909120825161060092840190611954565b60006001600160e01b03198216637965db0b60e01b14806103ca57506103ca826117d1565b606060006113a4836002611f25565b6113af906002611ef9565b67ffffffffffffffff8111156113d557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156113ff576020820181803683370190505b509050600360fc1b8160008151811061142857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061146557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000611489846002611f25565b611494906001611ef9565b90505b6001811115611528576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106114d657634e487b7160e01b600052603260045260246000fd5b1a60f81b8282815181106114fa57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361152181611f87565b9050611497565b508315610bee5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104ca565b60006001600160a01b0384163b1561167957604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906115bb903390899088908890600401611e06565b602060405180830381600087803b1580156115d557600080fd5b505af1925050508015611605575060408051601f3d908101601f1916820190925261160291810190611caa565b60015b61165f573d808015611633576040519150601f19603f3d011682016040523d82523d6000602084013e611638565b606091505b5080516116575760405162461bcd60e51b81526004016104ca90611e56565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b4d565b506001949350505050565b6060816116a85750506040805180820190915260018152600360fc1b602082015290565b8160005b81156116d257806116bc81611fd9565b91506116cb9050600a83611f11565b91506116ac565b60008167ffffffffffffffff8111156116fb57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611725576020820181803683370190505b5090505b8415610b4d5761173a600183611f44565b9150611747600a86611ff4565b611752906030611ef9565b60f81b81838151811061177557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611797600a86611f11565b9450611729565b6117a88383611821565b6117b56000848484611577565b6106005760405162461bcd60e51b81526004016104ca90611e56565b60006001600160e01b031982166380ac58cd60e01b148061180257506001600160e01b03198216635b5e139f60e01b145b806103ca57506301ffc9a760e01b6001600160e01b03198316146103ca565b6001600160a01b0382166118775760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104ca565b61188081610c77565b156118cd5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104ca565b6001600160a01b03821660009081526003602052604081208054600192906118f6908490611ef9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461196090611f9e565b90600052602060002090601f01602090048101928261198257600085556119c8565b82601f1061199b57805160ff19168380011785556119c8565b828001600101855582156119c8579182015b828111156119c85782518255916020019190600101906119ad565b506119d49291506119d8565b5090565b5b808211156119d457600081556001016119d9565b600067ffffffffffffffff80841115611a0857611a08612034565b604051601f8501601f19908116603f01168101908282118183101715611a3057611a30612034565b81604052809350858152868686011115611a4957600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114611a7a57600080fd5b919050565b600082601f830112611a8f578081fd5b610bee838335602085016119ed565b600060208284031215611aaf578081fd5b610bee82611a63565b60008060408385031215611aca578081fd5b611ad383611a63565b91506106d860208401611a63565b600080600060608486031215611af5578081fd5b611afe84611a63565b9250611b0c60208501611a63565b9150604084013590509250925092565b60008060008060808587031215611b31578081fd5b611b3a85611a63565b9350611b4860208601611a63565b925060408501359150606085013567ffffffffffffffff811115611b6a578182fd5b8501601f81018713611b7a578182fd5b611b89878235602084016119ed565b91505092959194509250565b60008060408385031215611ba7578182fd5b611bb083611a63565b915060208301358015158114611bc4578182fd5b809150509250929050565b600080600060608486031215611be3578283fd5b611bec84611a63565b9250602084013567ffffffffffffffff811115611c07578283fd5b611c1386828701611a7f565b925050611c2260408501611a63565b90509250925092565b60008060408385031215611c3d578182fd5b611c4683611a63565b946020939093013593505050565b600060208284031215611c65578081fd5b5035919050565b60008060408385031215611c7e578182fd5b823591506106d860208401611a63565b600060208284031215611c9f578081fd5b8135610bee8161204a565b600060208284031215611cbb578081fd5b8151610bee8161204a565b600060208284031215611cd7578081fd5b813567ffffffffffffffff811115611ced578182fd5b610b4d84828501611a7f565b60008060408385031215611d0b578182fd5b50508035926020909101359150565b60008151808452611d32816020860160208601611f5b565b601f01601f19169290920160200192915050565b60008251611d58818460208701611f5b565b9190910192915050565b60008351611d74818460208801611f5b565b835190830190611d88818360208801611f5b565b01949350505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611dc9816017850160208801611f5b565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611dfa816028840160208801611f5b565b01602801949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e3990830184611d1a565b9695505050505050565b602081526000610bee6020830184611d1a565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611f0c57611f0c612008565b500190565b600082611f2057611f2061201e565b500490565b6000816000190483118215151615611f3f57611f3f612008565b500290565b600082821015611f5657611f56612008565b500390565b60005b83811015611f76578181015183820152602001611f5e565b838111156109c95750506000910152565b600081611f9657611f96612008565b506000190190565b600181811c90821680611fb257607f821691505b60208210811415611fd357634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611fed57611fed612008565b5060010190565b6000826120035761200361201e565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461206057600080fd5b5056fea26469706673582212204cf8e2cc601407b133da991472a1533d12985d9e09dc1c9b78ea0df6a305305b64736f6c63430008040033";

export class Talentir__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Talentir> {
    return super.deploy(overrides || {}) as Promise<Talentir>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Talentir {
    return super.attach(address) as Talentir;
  }
  connect(signer: Signer): Talentir__factory {
    return super.connect(signer) as Talentir__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TalentirInterface {
    return new utils.Interface(_abi) as TalentirInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Talentir {
    return new Contract(address, _abi, signerOrProvider) as Talentir;
  }
}
