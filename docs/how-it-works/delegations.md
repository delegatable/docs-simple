---
title: Delegations
sidebar_label: Delegations
---

A `Delegation` grants authority to a third-party wallet to act on behalf of the signing wallet.

- **Delegate**: Address receiving delegated permissions/capabilities.
- **Authority**: Hash of previous delegation in a chained delegation.
- **Caveats**: Rules and caveats limiting a delegated addresses permissions.

When first learning about the Delegatable the two most important parameters are `delegate` and `caveats`. The `authority` field will be used later, as we begin to chain delegations.

Delegations allow Accounts to counter-factually sign delegations (i.e. access controls) to third-party Accounts, to act on their behalf. In other words if Account A signs a delegation to Account B, when Account B submits the transaction, it will be executed as if Account A had submitted the transaction.

:::warning

Without any `caveats` the third-party has full `permissions` of the signing wallet.

:::

**The approach is fundamentally different from on-chain access controls today.** Normally Account A would update a smart contract registry, allowing Account B to act on behalf of Account A... **and not acting as if they were Account A**.

### Delegatable Adapters

To use the Delegatable.sol framework it must be inherited. Contracts previously deployed CAN NOT take advantage of Delegatable unless an Adapter is created. Adapters can be used to either wrap existing contracts or act as middleware in certain architectures.

For example, any `ERC20` token can be upgraded using an `ERC20Delegatable` wrapper smart contract. Similar to how Wrapper ETH works, the underlying token would be locked, and an upgraded `ERC20Delegatable` would be unlocked with an equal balance.

If you have a specific adapter you would like to see created please create submit an issue.

https://github.com/delegatable/delegatable-sol/issues

# A Full Delegation and Invocation Flow

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
    name: 'ExampleContract',
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
  ExampleContractABI,
  window.ethereum // Injected provider => Wrap in JsonRpcProvider
);

const txPopulated = await contract.populateTransaction.setPurpose(
  'The purpose is to be set!'
);

const invocation = {
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

const request_invocationEIP712 = JSON.stringify({
  domain: {
    name: 'ExampleContract',
    version: '1',
    chainId: 1,
    verifyingContract: verifyingContract,
  },
  message: invocation,
  primaryType: 'Invocations',
  types: types,
});

const signed_invocationEIP712 = await window.ethereum.send(
  'eth_signTypedData_v4',
  ['0x0000000000000000000000000000000000000000', request_invocationEIP712]
);

// 🎉 INVOKE THE DELEGATION 🎊
const txReceipt = await contract.invoke([
  [
    {
      invocations: invocation,
      signature: signed_invocationEIP712,
    },
  ],
]);
```
