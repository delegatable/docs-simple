---
title: EIP712 Signed-Typed Data
sidebar_label: EIP712 Signed-Typed Data
---

The Delegatable framework uses the EIP712 signed-typed data specification for signing Delegations and Invocations.

EIP712 core benefits are human-readable and machine-verifiable data structures. In other words, Users can more easily understand what they're signing (and the side effects) and we can still process the signature on-chain, for minimal additional gas-costs.

If you are not familiar with the EIP712 specification it's recommended to review the following resources:

- Specification: https://eips.ethereum.org/EIPS/eip-712
- Guide: https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26
- Signing Data: https://docs.ethers.io/v5/api/signer/#Signer-signTypedData
- Verifying Data: https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyTypedData

## Data Structures

The Delegatable framework uses multiple data structures to enable counterfactual, revocable delegation.

- Delegation
  - delegate: address
  - authority: bytes32
  - caveats: Caveat[]
- SignedDelegation
  - delegation: Delegation
  - signature: bytes
- Caveat
  - enforcer: `address`
  - terms: `byes`
- Invocation
  - transaction: `Transaction`
  - authority: `ReplayProtection`
- Invocations
  - batch: `Invocation[]`
  - replayProtection: `ReplayProtection`
- SignedInvocation
  - invocations: `Invocation[]`
  - signature: `bytes`
- Transaction to: `address` gasLimit: `uint256` data: `bytes`
- ReplayProtection
  - nonce: `uint`
  - queue: `uint`
- IntentionToRevoke
  - delegationHash: `bytes32`
- SignedIntentionsToRevoke
  - signature: `bytes`
  - intentionToRevoke: `IntentionToRevoke`

### Diving Into the Nested Data Structure

The Delegatable framework uses 10 distinct data structures.

Top-level data types (e.x. `Invocation`) also include nested data types like `Transaction`. The nested data types, like `Transaction` continue to define data structures matching native transactions with properties like `to`, `gasLimit` and `data`.

```js.
export const delegatableTypes = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
  ],
  Invocation: [
    { name: 'transaction', type: 'Transaction' },
    { name: 'authority', type: 'SignedDelegation[]' },
  ],
  Invocations: [
    { name: 'batch', type: 'Invocation[]' },
    { name: 'replayProtection', type: 'ReplayProtection' },
  ],
  SignedInvocation: [
    { name: 'invocations', type: 'Invocations' },
    { name: 'signature', type: 'bytes' },
  ],
  Transaction: [
    { name: 'to', type: 'address' },
    { name: 'gasLimit', type: 'uint256' },
    { name: 'data', type: 'bytes' },
  ],
  ReplayProtection: [
    { name: 'nonce', type: 'uint' },
    { name: 'queue', type: 'uint' },
  ],
  Delegation: [
    { name: 'delegate', type: 'address' },
    { name: 'authority', type: 'bytes32' },
    { name: 'caveats', type: 'Caveat[]' },
  ],
  Caveat: [
    { name: 'enforcer', type: 'address' },
    { name: 'terms', type: 'bytes' },
  ],
  SignedDelegation: [
    { name: 'delegation', type: 'Delegation' },
    { name: 'signature', type: 'bytes' },
  ],
  IntentionToRevoke: [{ name: 'delegationHash', type: 'bytes32' }],
  SignedIntentionToRevoke: [
    { name: 'signature', type: 'bytes' },
    { name: 'intentionToRevoke', type: 'IntentionToRevoke' },
  ],
};
```
