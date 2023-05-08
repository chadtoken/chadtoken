import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { hooks, metaMask } from '../connectors/metaMask';
import { getAddChainParameters } from '../chains';

const ETHEREUM_MAINNET_CHAIN_ID = 1;
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export default function Connect(props: any) {
  const isActivating = useIsActivating();
  const isActive = useIsActive();

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, []);

  const DisconnectButton = () => {
    return <Button {...props} onClick={() => {
      if (metaMask?.deactivate) {
        void metaMask.deactivate()
      } else {
        void metaMask.resetState()
      }
    }}>
      Disconnect
    </Button>;
  };

  const ConnectButton = () => {
    return <Button {...props} onClick={async () => {
      try {
        await metaMask.activate(getAddChainParameters(ETHEREUM_MAINNET_CHAIN_ID))
      } catch (err) {
        console.error(err);
      }
    }}
      disabled={isActivating}>
      Connect
    </Button >;
  };

  return isActive ? <DisconnectButton /> : <ConnectButton />;
}