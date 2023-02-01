---
title: Delegations
sidebar_label: Delegations
---

## Quick Start

```js
import { generateUtil } from 'eth-delegatable-utils';
import { erc20abi } from 'wagmi';

const contractName = 'ERC20_CONTRACT';
const contractAddress = '0x000..0000';
const contractInstance = ethers.Contract(erc20abi, contractAddress);
const privateKey = '0xd3aD...b33f';
const address = '0x123...321';
const enforcers = []; // No enforcers. Unbounded permissions.

const contractInfo = {
  chainId: contractInstance.deployTransaction.chainId,
  verifyingContract: contractInstance.address,
  name: contractName,
};
delegatableUtils = generateUtil(contractInfo);

async function main() {
  const delegation = generateDelegation(
    contractName,
    contractInstance,
    privateKey,
    address,
    enforcers
  );
  const popTx = await contractInstance.populateTransaction.transfer(
    address,
    ethers.utils.parseEther('0.5')
  );
  const invocationMessage = {
    replayProtection: {
      nonce: '0x01',
      queue: '0x00',
    },
    batch: [
      {
        authority: [delegation],
        transaction: {
          to: contractInstance.address,
          gasLimit: '210000000000000000',
          data: popTx.data,
        },
      },
    ],
  };

  const invocation = delegatableUtils.signInvocation(
    invocationMessage,
    privateKey
  );

  await contractInstance.invoke([
    {
      signature: invocation.signature,
      invocations: invocation.invocations,
    },
  ]);
}
```
