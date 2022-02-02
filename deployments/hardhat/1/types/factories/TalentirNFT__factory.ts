/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TalentirNFT, TalentirNFTInterface } from "../TalentirNFT";

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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenID",
        type: "uint256",
      },
    ],
    name: "UpdateRoyaltyReceiver",
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "contentIdToTokenId",
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
        internalType: "uint16",
        name: "percentage",
        type: "uint16",
      },
    ],
    name: "setRoyalty",
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
  "0x60806040526001805461ffff1916600a1790553480156200001f57600080fd5b5060408051808201825260088152672a30b632b73a34b960c11b60208083019182528351808501909452600384526215105360ea1b9084015281519192916200006b916002916200016a565b508051620000819060039060208401906200016a565b506200009391506000905033620000c5565b620000bf7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000c5565b6200024d565b60008281526009602090815260408083206001600160a01b038516845290915290205460ff16620001665760008281526009602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001253390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b828054620001789062000210565b90600052602060002090601f0160209004810192826200019c5760008555620001e7565b82601f10620001b757805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e7578251825591602001919060010190620001ca565b50620001f5929150620001f9565b5090565b5b80821115620001f55760008155600101620001fa565b600181811c908216806200022557607f821691505b602082108114156200024757634e487b7160e01b600052602260045260246000fd5b50919050565b612339806200025d6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636352211e116100f9578063b88d4fde11610097578063d547741f11610071578063d547741f146103cf578063e4ace31a146103e2578063e985e9c5146103f5578063fa8509c81461040857600080fd5b8063b88d4fde14610382578063c87b56dd14610395578063d5391393146103a857600080fd5b806391d14854116100d357806391d148541461034c57806395d89b411461035f578063a217fddf14610367578063a22cb4651461036f57600080fd5b80636352211e146103135780636e443dda1461032657806370a082311461033957600080fd5b80632a55205a1161016657806336568abe1161014057806336568abe146102c757806336e79a5a146102da57806342842e0e146102ed57806342966c681461030057600080fd5b80632a55205a1461026f5780632f2ff15d146102a1578063354c85aa146102b457600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063081812fc146101eb578063095ea7b31461021657806323b872dd1461022b578063248a9ca31461023e575b600080fd5b6101c16101bc366004611f0f565b61041b565b60405190151581526020015b60405180910390f35b6101de61042c565b6040516101cd91906120e6565b6101fe6101f9366004611ed5565b6104be565b6040516001600160a01b0390911681526020016101cd565b610229610224366004611eac565b61054b565b005b610229610239366004611d62565b610661565b61026161024c366004611ed5565b60009081526009602052604090206001015490565b6040519081526020016101cd565b61028261027d366004611f9c565b610693565b604080516001600160a01b0390931683526020830191909152016101cd565b6102296102af366004611eed565b61073c565b6102296102c2366004611eed565b610762565b6102296102d5366004611eed565b6107d3565b6102296102e8366004611f7a565b610851565b6102296102fb366004611d62565b610876565b61022961030e366004611ed5565b610891565b6101fe610321366004611ed5565b61090b565b610261610334366004611f47565b610982565b610261610347366004611d1f565b6109b3565b6101c161035a366004611eed565b610a3a565b6101de610a65565b610261600081565b61022961037d366004611e16565b610a74565b610229610390366004611d9d565b610a7f565b6101de6103a3366004611ed5565b610ab7565b6102617f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102296103dd366004611eed565b610ac2565b6102296103f0366004611d1f565b610ae8565b6101c1610403366004611d39565b610b17565b610229610416366004611e50565b610b62565b600061042682610bbf565b92915050565b60606002805461043b90612241565b80601f016020809104026020016040519081016040528092919081815260200182805461046790612241565b80156104b45780601f10610489576101008083540402835291602001916104b4565b820191906000526020600020905b81548152906001019060200180831161049757829003601f168201915b5050505050905090565b60006104c982610be4565b61052f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006105568261090b565b9050806001600160a01b0316836001600160a01b031614156105c45760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610526565b336001600160a01b03821614806105e057506105e08133610b17565b6106525760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610526565b61065c8383610c01565b505050565b61066c335b82610c6f565b6106885760405162461bcd60e51b81526004016105269061214b565b61065c838383610d39565b60008281526020819052604081205481906001600160a01b03166106f95760405162461bcd60e51b815260206004820152601b60248201527f4e6f20726f79616c747920696e666f20666f72206164647265737300000000006044820152606401610526565b6000848152602081905260409020546001546001600160a01b0390911692506064906107299061ffff16856121c8565b61073391906121b4565b90509250929050565b6000828152600960205260409020600101546107588133610ed5565b61065c8383610f39565b6000828152602081905260409020546001600160a01b03163381146107c95760405162461bcd60e51b815260206004820152601c60248201527f526f79616c7479207265636569766572206d75737420757064617465000000006044820152606401610526565b61065c8383610fbf565b6001600160a01b03811633146108435760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610526565b61084d8282611033565b5050565b600061085d8133610ed5565b506001805461ffff191661ffff92909216919091179055565b61065c83838360405180602001604052806000815250610a7f565b61089a33610666565b6108ff5760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b6064820152608401610526565b6109088161109a565b50565b6000818152600460205260408120546001600160a01b0316806104265760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610526565b6000816040516020016109959190611fe9565b60408051601f19818403018152919052805160209091012092915050565b60006001600160a01b038216610a1e5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610526565b506001600160a01b031660009081526005602052604090205490565b60009182526009602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606003805461043b90612241565b61084d3383836110a3565b610a893383610c6f565b610aa55760405162461bcd60e51b81526004016105269061214b565b610ab184848484611172565b50505050565b6060610426826111a5565b600082815260096020526040902060010154610ade8133610ed5565b61065c8383611033565b6000610af48133610ed5565b50600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600a546000906001600160a01b0383811691161480610b5b57506001600160a01b0380841660009081526007602090815260408083209386168352929052205460ff165b9392505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610b8d8133610ed5565b6000610b9884610982565b9050610ba48582611323565b610bae818561133d565b610bb88184610fbf565b5050505050565b60006001600160e01b03198216637965db0b60e01b14806104265750610426826113c8565b6000908152600460205260409020546001600160a01b0316151590565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610c368261090b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610c7a82610be4565b610cdb5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610526565b6000610ce68361090b565b9050806001600160a01b0316846001600160a01b03161480610d215750836001600160a01b0316610d16846104be565b6001600160a01b0316145b80610d315750610d318185610b17565b949350505050565b826001600160a01b0316610d4c8261090b565b6001600160a01b031614610db05760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610526565b6001600160a01b038216610e125760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610526565b610e1d600082610c01565b6001600160a01b0383166000908152600560205260408120805460019290610e469084906121e7565b90915550506001600160a01b0382166000908152600560205260408120805460019290610e7490849061219c565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610edf8282610a3a565b61084d57610ef7816001600160a01b031660146113d3565b610f028360206113d3565b604051602001610f13929190612034565b60408051601f198184030181529082905262461bcd60e51b8252610526916004016120e6565b610f438282610a3a565b61084d5760008281526009602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610f7b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260409182902080546001600160a01b031981166001600160a01b0386811691821790935584519290911680835292820152918201849052907f971bbbcaa216717fc665055dd5772bf872f40f18475942b07c7b48594b662aa49060600160405180910390a1505050565b61103d8282610a3a565b1561084d5760008281526009602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610908816115b5565b816001600160a01b0316836001600160a01b031614156111055760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610526565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61117d848484610d39565b611189848484846115dc565b610ab15760405162461bcd60e51b8152600401610526906120f9565b60606111b082610be4565b6112165760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b6064820152608401610526565b6000828152600860205260408120805461122f90612241565b80601f016020809104026020016040519081016040528092919081815260200182805461125b90612241565b80156112a85780601f1061127d576101008083540402835291602001916112a8565b820191906000526020600020905b81548152906001019060200180831161128b57829003601f168201915b5050505050905060006112d5604080518082019091526007815266697066733a2f2f60c81b602082015290565b90508051600014156112e8575092915050565b81511561131a578082604051602001611302929190612005565b60405160208183030381529060405292505050919050565b610d31846116e9565b61084d8282604051806020016040528060008152506117cf565b61134682610be4565b6113a95760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610526565b6000828152600860209081526040909120825161065c92840190611b9f565b600061042682611802565b606060006113e28360026121c8565b6113ed90600261219c565b67ffffffffffffffff81111561141357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561143d576020820181803683370190505b509050600360fc1b8160008151811061146657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106114a357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006114c78460026121c8565b6114d290600161219c565b90505b6001811115611566576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061151457634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061153857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361155f8161222a565b90506114d5565b508315610b5b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610526565b6115be81611842565b600090815260208190526040902080546001600160a01b0319169055565b60006001600160a01b0384163b156116de57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906116209033908990889088906004016120a9565b602060405180830381600087803b15801561163a57600080fd5b505af192505050801561166a575060408051601f3d908101601f1916820190925261166791810190611f2b565b60015b6116c4573d808015611698576040519150601f19603f3d011682016040523d82523d6000602084013e61169d565b606091505b5080516116bc5760405162461bcd60e51b8152600401610526906120f9565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610d31565b506001949350505050565b60606116f482610be4565b6117585760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610526565b600061177e604080518082019091526007815266697066733a2f2f60c81b602082015290565b9050600081511161179e5760405180602001604052806000815250610b5b565b806117a884611882565b6040516020016117b9929190612005565b6040516020818303038152906040529392505050565b6117d9838361199c565b6117e660008484846115dc565b61065c5760405162461bcd60e51b8152600401610526906120f9565b60006001600160e01b031982166380ac58cd60e01b148061183357506001600160e01b03198216635b5e139f60e01b145b80610426575061042682611acf565b61184b81611b04565b6000818152600860205260409020805461186490612241565b15905061090857600081815260086020526040812061090891611c23565b6060816118a65750506040805180820190915260018152600360fc1b602082015290565b8160005b81156118d057806118ba8161227c565b91506118c99050600a836121b4565b91506118aa565b60008167ffffffffffffffff8111156118f957634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611923576020820181803683370190505b5090505b8415610d31576119386001836121e7565b9150611945600a86612297565b61195090603061219c565b60f81b81838151811061197357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611995600a866121b4565b9450611927565b6001600160a01b0382166119f25760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610526565b6119fb81610be4565b15611a485760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610526565b6001600160a01b0382166000908152600560205260408120805460019290611a7190849061219c565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160e01b0319821663152a902d60e11b148061042657506301ffc9a760e01b6001600160e01b0319831614610426565b6000611b0f8261090b565b9050611b1c600083610c01565b6001600160a01b0381166000908152600560205260408120805460019290611b459084906121e7565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b828054611bab90612241565b90600052602060002090601f016020900481019282611bcd5760008555611c13565b82601f10611be657805160ff1916838001178555611c13565b82800160010185558215611c13579182015b82811115611c13578251825591602001919060010190611bf8565b50611c1f929150611c59565b5090565b508054611c2f90612241565b6000825580601f10611c3f575050565b601f01602090049060005260206000209081019061090891905b5b80821115611c1f5760008155600101611c5a565b600067ffffffffffffffff80841115611c8957611c896122d7565b604051601f8501601f19908116603f01168101908282118183101715611cb157611cb16122d7565b81604052809350858152868686011115611cca57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114611cfb57600080fd5b919050565b600082601f830112611d10578081fd5b610b5b83833560208501611c6e565b600060208284031215611d30578081fd5b610b5b82611ce4565b60008060408385031215611d4b578081fd5b611d5483611ce4565b915061073360208401611ce4565b600080600060608486031215611d76578081fd5b611d7f84611ce4565b9250611d8d60208501611ce4565b9150604084013590509250925092565b60008060008060808587031215611db2578081fd5b611dbb85611ce4565b9350611dc960208601611ce4565b925060408501359150606085013567ffffffffffffffff811115611deb578182fd5b8501601f81018713611dfb578182fd5b611e0a87823560208401611c6e565b91505092959194509250565b60008060408385031215611e28578182fd5b611e3183611ce4565b915060208301358015158114611e45578182fd5b809150509250929050565b600080600060608486031215611e64578283fd5b611e6d84611ce4565b9250602084013567ffffffffffffffff811115611e88578283fd5b611e9486828701611d00565b925050611ea360408501611ce4565b90509250925092565b60008060408385031215611ebe578182fd5b611ec783611ce4565b946020939093013593505050565b600060208284031215611ee6578081fd5b5035919050565b60008060408385031215611eff578182fd5b8235915061073360208401611ce4565b600060208284031215611f20578081fd5b8135610b5b816122ed565b600060208284031215611f3c578081fd5b8151610b5b816122ed565b600060208284031215611f58578081fd5b813567ffffffffffffffff811115611f6e578182fd5b610d3184828501611d00565b600060208284031215611f8b578081fd5b813561ffff81168114610b5b578182fd5b60008060408385031215611fae578182fd5b50508035926020909101359150565b60008151808452611fd58160208601602086016121fe565b601f01601f19169290920160200192915050565b60008251611ffb8184602087016121fe565b9190910192915050565b600083516120178184602088016121fe565b83519083019061202b8183602088016121fe565b01949350505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161206c8160178501602088016121fe565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161209d8160288401602088016121fe565b01602801949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906120dc90830184611fbd565b9695505050505050565b602081526000610b5b6020830184611fbd565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156121af576121af6122ab565b500190565b6000826121c3576121c36122c1565b500490565b60008160001904831182151516156121e2576121e26122ab565b500290565b6000828210156121f9576121f96122ab565b500390565b60005b83811015612219578181015183820152602001612201565b83811115610ab15750506000910152565b600081612239576122396122ab565b506000190190565b600181811c9082168061225557607f821691505b6020821081141561227657634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612290576122906122ab565b5060010190565b6000826122a6576122a66122c1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461090857600080fdfea2646970667358221220a383c653201859bf875a7b557d34fd496df366a49e9b5bada93f58ac03e03aaf64736f6c63430008040033";

type TalentirNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TalentirNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TalentirNFT__factory extends ContractFactory {
  constructor(...args: TalentirNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TalentirNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TalentirNFT> {
    return super.deploy(overrides || {}) as Promise<TalentirNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TalentirNFT {
    return super.attach(address) as TalentirNFT;
  }
  connect(signer: Signer): TalentirNFT__factory {
    return super.connect(signer) as TalentirNFT__factory;
  }
  static readonly contractName: "TalentirNFT";
  public readonly contractName: "TalentirNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TalentirNFTInterface {
    return new utils.Interface(_abi) as TalentirNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TalentirNFT {
    return new Contract(address, _abi, signerOrProvider) as TalentirNFT;
  }
}
