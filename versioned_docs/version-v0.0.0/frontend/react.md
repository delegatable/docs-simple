---
title: React + WAGMI
sidebar_label: React + WAGMI
---

```js
import * as React from 'react';
import { useAccount, useSigner } from 'wagmi';
import { types } from '@delegatable/core-js';

export const Component = ({ className }: ComponentProps) => {
  const signer = useSigner();
  const { address } = useAccount();

  const createDelegation = async (to) => {
    const delegation = {
      delegate: to,
      authority:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      caveats: [],
    };

    const msg = JSON.stringify({
      domain: { ...domain, verifyingContract: verifyingContract },
      message: delegation,
      primaryType: 'Delegation',
      types: types,
    });

    const signedDelegation1 = await signer.data?.provider?.send(
      'eth_signTypedData_v4',
      [address, msg]
    );
  };
  return (
    <div
      onClick={() =>
        createDelegation('0x000000000000000000000000000000000000dEaD')
      }
    >
      Create
    </div>
  );
};

export default Component;
```
