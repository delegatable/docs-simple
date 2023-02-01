---
title: BlockNumberBefore Enforcer
sidebar_label: BlockNumberBefore
---

The `BlockNumberBeforeEnforcer.sol` smart contract adds the ability to caveat before `block.numbers`.

## Deployments

- Mainnet: Coming Soon
- Polygon: Coming Soon
- Optimism: Coming Soon

# How It Works

The `terms` field is expected to contain the `block.number`, after which invocations will not be valid. The `block.number` is passed as a `bytes8`.

## Javascript Example

```js
const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: BlockNumberBeforeEnforcer.address,
      // Transaction must be executed before block.number 0x32, which is 10 in decimal format.
      terms: '0x0000000000000032',
    },
  ],
};
```

### Smart Contract

```solidity
contract BlockNumberBeforeEnforcer is CaveatEnforcer {
    /**
    * @notice Allows the delegator to specify the latest block the delegation will be valid.
    * @param terms - The block before which the delegation is valid. See test for example.
    * @param transaction - The transaction the delegate might try to perform.
    * @param delegationHash - The hash of the delegation being operated on.
    */
    function enforceCaveat(
        bytes calldata terms,
        Transaction calldata transaction,
        bytes32 delegationHash
    ) public override returns (bool) {
        uint64 blockThreshold = BytesLib.toUint64(terms, 0);
        if (blockThreshold > block.number) {
            return true;
        } else {
            revert("BlockNumberBeforeEnforcer:expired-delegation");
        }
    }
}

```
