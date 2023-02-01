---
title: AllowedMethods Enforcer
sidebar_label: AllowedMethods
---

The `AllowedMethodsEnforcer.sol` smart contract adds the ability to caveat on `FUNCTION_SELECTOR`.

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
      enforcer: AllowedMethodsEnforcer.address,
      // below is the function selector of the `setPurpose(string)` function
      terms: '0xeb68757f',
    },
  ],
};
```

### Smart Contract

```solidity
contract AllowedMethodsEnforcer is CaveatEnforcer {
    /**
     * @notice Allows the delegator to limit what methods the delegate may call.
     * @param terms - A series of 4byte method identifiers, representing the methods that the delegate is allowed to call.
     * @param transaction - The transaction the delegate might try to perform.
     * @param delegationHash - The hash of the delegation being operated on.
     */
    function enforceCaveat(
        bytes calldata terms,
        Transaction calldata transaction,
        bytes32 delegationHash
    ) public pure override returns (bool) {
        bytes4 targetSig = bytes4(transaction.data[0:4]);
        for (uint256 i = 0; i < terms.length; i += 4) {
            bytes4 allowedSig = bytes4(terms[i:i + 4]);
            if (allowedSig == targetSig) {
                return true;
            }
        }
        revert("AllowedMethodsEnforcer:method-not-allowed");
    }
}
```
