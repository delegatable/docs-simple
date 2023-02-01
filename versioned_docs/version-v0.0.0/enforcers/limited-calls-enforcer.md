---
title: LimitedCalls Enforcer
sidebar_label: LimitedCalls
---

The `LimitedCallsEnforcer.sol` smart contract gives the delegator the flexibility to pre-set how many times his delegate is allowed to repeat a specific action.

## Deployments

- Mainnet: Coming Soon
- Polygon: Coming Soon
- Optimism: Coming Soon

# How It Works

The `terms` field is expected to contain the `FUNCTION_SELECTOR` of the specific function the delegate is allowed to call. In case he is allowed to call more than one functions, insert the appropriate `FUNCTION_SELECTOR objects` in the `caveats[]`.

## Javascript Example

```js
const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: LimitedCallsEnforcer.address,
      // in terms delegator specifies what the max number of calls is (e.g. 2)
      terms:
        '0x0000000000000000000000000000000000000000000000000000000000000002',
    },
  ],
};
```

### Smart Contract

```solidity
contract LimitedCallsEnforcer is CaveatEnforcer {
    mapping(address => mapping(bytes32 => uint256)) callCounts;

    /**
     * @notice Allows the delegator to specify a maximum number of times the recipient may perform transactions on their behalf.
     * @param terms - The maximum number of times the delegate may perform transactions on their behalf.
     * @param transaction - The transaction the delegate might try to perform.
     * @param delegationHash - The hash of the delegation being operated on.
     */
    function enforceCaveat(
        bytes calldata terms,
        Transaction calldata transaction,
        bytes32 delegationHash
    ) public override returns (bool) {
        uint256 limit = BytesLib.toUint256(terms, 0);
        uint256 callCount = callCounts[msg.sender][delegationHash];
        require(callCount < limit, "LimitedCallsEnforcer:limit-exceeded");
        callCounts[msg.sender][delegationHash]++;
        return true;
    }
}
```
