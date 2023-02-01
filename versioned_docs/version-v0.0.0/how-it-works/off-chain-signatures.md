---
title: Off-Chain Signatures
sidebar_label: Off-Chain Signatures
---

The `invoke` method is how `Delegations` and `Invocations` are executed.

```js
import { types } from 'eth-delegatable-utils';

const delegation = {
  delegate: '0x000000000000000000000000000000000000d3aD',
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [],
};

const request_delegationEIP712 = JSON.stringify({
  domain: {
    name: 'PurposeContract',
    version: '1',
    chainId: 1,
    verifyingContract: '0xdEAD000000000000000042069420694206942069',
  },
  message: delegation,
  primaryType: 'Delegation',
  types: types,
});

const signed_delegationEIP712 = await window.ethereum.send(
  'eth_signTypedData_v4',
  ['0x0000000000000000000000000000000000000000', request_delegationEIP712]
);

const contract = new ethers.Contract(
  address,
  PurposeContractABI,
  window.ethereum
);

const txPopulated = await contract.populateTransaction.setPurpose(
  'The purpose is to be set!'
);

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
          signature: signed_delegationEIP712,
        },
      ],
      transaction: {
        to: verifyingContract,
        gasLimit: '10000000000000000',
        data: txPopulated.data,
      },
    },
  ],
};

const request_intentionEIP712 = JSON.stringify({
  domain: {
    name: 'PurposeContract',
    version: '1',
    chainId: 1,
    verifyingContract: verifyingContract,
  },
  message: intention,
  primaryType: 'Invocations',
  types: types,
});

const signed_intentionEIP712 = await window.ethereum.send(
  'eth_signTypedData_v4',
  ['0x0000000000000000000000000000000000000000', request_intentionEIP712]
);

// 🎉 INVOKE THE DELEGATION 🎊
const txReceipt = await contract.invoke([
  [
    {
      invocations: intention,
      signature: signed_intentionEIP712,
    },
  ],
]);
```
