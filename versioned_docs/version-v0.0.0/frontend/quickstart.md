---
title: Quickstart
sidebar_label: Quickstart
---

### Create and Sign a Delegation

A `Delegation` grants authority to a third-party wallet to act on behalf of the signing wallet.

- **Delegate**: Address receiving delegated permissions/authority.
- **Authority**: ...
- **Caveats**: Rules and caveats limiting a delegated addresses permissions.

When first learning about the Delegatable the two most important parameters are `delegate` and `caveats`.

:::warning

Without any `caveats` the third-party has full `permissions` of the signing wallet.

:::

### Examples

The most straight-forward method for creating a delegation is to request an EIP712 signature from an injected browser wallet.

```javascript
const types = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
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
};

const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: 'INSERT_ENFORCER_ADDRESS',
      terms: 'INSERT_CUSTOM_LOGIC',
    },
  ],
};

const eip712Data = JSON.stringify({
  domain: {
    name: 'DelegatableExample',
    version: '1',
    chainId: 1,
    verifyingContract: '0xdEAD000000000000000042069420694206942069',
  },
  message: delegation,
  primaryType: 'Delegation',
  types: types,
});

//  Works w/ Metamask
const delegation = await window.ethereum.send('eth_signTypedData_v4', [
  '0x0000000000000000000000000000000000000000',
  eip712Data,
]);
```

### Create and Sign Intention

```js
const intention = {
  replayProtection: {
    nonce: '0x01',
    queue: '0x01',
  },
  batch: [
    {
      authority: [
        {
          delegation: delegation,
          signature: signedDelegation,
        },
      ],
      transaction: {
        to: verifyingContract,
        gasLimit: '10000000000000000',
        data: tx,
      },
    },
  ],
};

const intentionString = JSON.stringify({
  domain: { ...domain, verifyingContract: verifyingContract },
  message: intention,
  primaryType: 'Invocations',
  types: types,
});

return {
  intention: intention,
  string: intentionString,
};
```
