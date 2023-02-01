---
title: TimestampBefore Enforcer
sidebar_label: TimestampBefore
---

The `TimestampBeforeEnforcer.sol` smart contract adds the ability to caveat before `timestamp`.

## Deployments

- Mainnet: Coming Soon
- Polygon: Coming Soon
- Optimism: Coming Soon

# How It Works

The `terms` field is expected to contain the `timestamp`, after which invocations will not be valid. The `timestamp` is passed as a `bytes8`.

## Javascript Example

```js
const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: TimestampBeforeEnforcer.address,
      // Transaction must be executed after timestamp 0x00000007915eda10, which is 32503683600 in unix epoch timestamp
      // (Wednesday, January 1, 3000 1:00:00 AM).
      terms: '0x00000007915eda10',
    },
  ],
};
```

### Smart Contract

```solidity
contract TimestampBeforeEnforcer is CaveatEnforcer {
    /**
     * @notice Allows the delegator to specify the latest timestamp the delegation will be valid.
     * @param terms - The latest timestamp this delegation is valid.
     * @param transaction - The transaction the delegate might try to perform.
     * @param delegationHash - The hash of the delegation being operated on.
     **/
    function enforceCaveat(
        bytes calldata terms,
        Transaction calldata transaction,
        bytes32 delegationHash
    ) public override returns (bool) {
        uint64 timestampThreshold = BytesLib.toUint64(terms, 0);
        if (timestampThreshold > block.timestamp) {
            return true;
        } else {
            revert("TimestampBeforeEnforcer:expired-delegation");
        }

    }
}

```
