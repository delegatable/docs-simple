---
title: BlockNumber
sidebar_label: BlockNumberAfter
---

The `BlockNumberEnforcer.sol` smart contract adds the ability to caveat before/after `block.numbers`

## Deployments

- Mainnet: Coming Soon
- Polygon: Coming Soon
- Optimism: Coming Soon

# How It Works

The `terms` field is expected to contain `2` tightly packed `uint128` inputs.

- `logicOperator`: toggle between BEFORE or AFTER a `block.number` when executing run-time enforcer.
- `blockExpiration`: compared to the run-time `block.number` to determine if the logicOperator conditions are met.

The `terms` fields

## Term Deconstruction

```js
/* bytes ---------------------------------------------------------- */
"0x0000000000000000000000000000000000000000000000000000000000000000",

/* uint128 ------------------------ uint128 ------------------------ */
"0x00000000000000000000000000000000 00000000000000000000000000000000",

// The bytes is split in the middle.
// 0: Controls the logicOperator using a boolean flag
// 1: Compared to the block.number at run-time

/* uint128 | before (false) ------- uint128 | block.number 0 ------- */
"0x00000000000000000000000000000000 00000000000000000000000000000000",

/* uint128 | after (true) --------- uint128 | block.number 10 ------ */
"0x00000000000000000000000000000001 0000000000000000000000000000000a",
```

## Javascript Example

```js
const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: BlockNumberEnforcer.address,
      // Transaction must be executed after block.number 10
      terms:
        '0x0000000000000000000000000000000100000000000000000000000000000032',
    },
    {
      enforcer: BlockNumberEnforcer.address,
      // Transaction must be executed BEFORE block.number 5000
      terms:
        '0x0000000000000000000000000000000000000000000000000000000000001388',
    },
  ],
};
```

### Smart Contract

```solidity
contract BlockNumberEnforcer is CaveatEnforcer {
    function enforceCaveat(
        bytes calldata terms,
        Transaction calldata,
        bytes32
    ) public override returns (bool) {

        /// @dev 0 == blockExpiration BEFORE blockNumber
        /// @dev 1 == blockExpiration AFTER blockNumber
        uint128 logicOperator = BytesLib.toUint128(terms, 0);

        /// @dev compared with the run-time block.number global variable
        uint128 blockExpiration = BytesLib.toUint128(terms, 16);

if (logicOperator == 0) {
    if (blockExpiration < block.number) {
        return true;
    } else {
        revert("BlockNumberEnforcer:expired-delegation");
    }
} else {
    if (blockExpiration > block.number) {
        return true;
    } else {
        revert("BlockNumberEnforcer:early-delegation");
    }
}
    }
}
```
