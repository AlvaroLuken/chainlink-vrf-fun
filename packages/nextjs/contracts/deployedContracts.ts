/**
 * This file is autogenerated by Scaffold-Alchemy.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-alchemy/contract";

const deployedContracts = {
  84532: {
    Counter: {
      address: "0xa152abd802feda62d8f5a229bf544f038834e5a1",
      abi: [
        {
          type: "constructor",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "_x",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "decrement",
          stateMutability: "nonpayable",
          inputs: [],
          outputs: [],
        },
        {
          type: "function",
          name: "increment",
          stateMutability: "nonpayable",
          inputs: [],
          outputs: [],
        },
        {
          type: "function",
          name: "x",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
      ],
      inheritedFunctions: {},
    },
    VRFConsumer: {
      address: "0x108bea8846a61756119b2e6816b01d459e6872d5",
      abi: [
        {
          type: "constructor",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "subscriptionId",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "error",
          name: "OnlyCoordinatorCanFulfill",
          inputs: [
            {
              name: "have",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "want",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "error",
          name: "OnlyOwnerOrCoordinator",
          inputs: [
            {
              name: "have",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "owner",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "coordinator",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "error",
          name: "ZeroAddress",
          inputs: [],
          outputs: [],
        },
        {
          type: "event",
          name: "CoordinatorSet",
          inputs: [
            {
              name: "vrfCoordinator",
              type: "address",
              baseType: "address",
              indexed: false,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "DiceLanded",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "result",
              type: "uint256",
              baseType: "uint256",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "DiceRolled",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "roller",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "OwnershipTransferRequested",
          inputs: [
            {
              name: "from",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "to",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "from",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "to",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "acceptOwnership",
          stateMutability: "nonpayable",
          inputs: [],
          outputs: [],
        },
        {
          type: "function",
          name: "callbackGasLimit",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32",
              baseType: "uint32",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "checkIfRollCompleted",
          stateMutability: "view",
          inputs: [
            {
              name: "player",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              baseType: "bool",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "checkIfRollInProgress",
          stateMutability: "view",
          inputs: [
            {
              name: "player",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              baseType: "bool",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "house",
          stateMutability: "view",
          inputs: [
            {
              name: "player",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              baseType: "string",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "numWords",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32",
              baseType: "uint32",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "owner",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "rawFulfillRandomWords",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "randomWords",
              type: "uint256[]",
              baseType: "array",
              components: null,
              arrayLength: -1,
              arrayChildren: {
                name: "",
                type: "uint256",
                baseType: "uint256",
                components: null,
                arrayLength: null,
                arrayChildren: null,
              },
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "requestConfirmations",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint16",
              baseType: "uint16",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "rollDice",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "roller",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "s_keyHash",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              baseType: "bytes32",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "s_subscriptionId",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "s_vrfCoordinator",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "setCoordinator",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "_vrfCoordinator",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "transferOwnership",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "to",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "vrfCoordinator",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    VRFConsumer: {
      address: "0x2f9a0e3f1814d7d63551588f8620f3ac78262bda",
      abi: [
        {
          type: "constructor",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "subscriptionId",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "error",
          name: "OnlyCoordinatorCanFulfill",
          inputs: [
            {
              name: "have",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "want",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "error",
          name: "OnlyOwnerOrCoordinator",
          inputs: [
            {
              name: "have",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "owner",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "coordinator",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "error",
          name: "ZeroAddress",
          inputs: [],
          outputs: [],
        },
        {
          type: "event",
          name: "CoordinatorSet",
          inputs: [
            {
              name: "vrfCoordinator",
              type: "address",
              baseType: "address",
              indexed: false,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "DiceLanded",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "result",
              type: "uint256",
              baseType: "uint256",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "DiceRolled",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "roller",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "OwnershipTransferRequested",
          inputs: [
            {
              name: "from",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "to",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "from",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "to",
              type: "address",
              baseType: "address",
              indexed: true,
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "acceptOwnership",
          stateMutability: "nonpayable",
          inputs: [],
          outputs: [],
        },
        {
          type: "function",
          name: "callbackGasLimit",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32",
              baseType: "uint32",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "house",
          stateMutability: "view",
          inputs: [
            {
              name: "player",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              baseType: "string",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "numWords",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32",
              baseType: "uint32",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "owner",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "rawFulfillRandomWords",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
            {
              name: "randomWords",
              type: "uint256[]",
              baseType: "array",
              components: null,
              arrayLength: -1,
              arrayChildren: {
                name: "",
                type: "uint256",
                baseType: "uint256",
                components: null,
                arrayLength: null,
                arrayChildren: null,
              },
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "requestConfirmations",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint16",
              baseType: "uint16",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "rollDice",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "roller",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [
            {
              name: "requestId",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "s_keyHash",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              baseType: "bytes32",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "s_subscriptionId",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              baseType: "uint256",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "s_vrfCoordinator",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
        {
          type: "function",
          name: "setCoordinator",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "_vrfCoordinator",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "transferOwnership",
          stateMutability: "nonpayable",
          inputs: [
            {
              name: "to",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
          outputs: [],
        },
        {
          type: "function",
          name: "vrfCoordinator",
          stateMutability: "view",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              baseType: "address",
              components: null,
              arrayLength: null,
              arrayChildren: null,
            },
          ],
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
