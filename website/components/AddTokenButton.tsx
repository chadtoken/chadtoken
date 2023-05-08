import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';

const tokenAddress = '0xb4577d084f289e696ddfac178c11663e573900f1';
const tokenSymbol = 'CHAD';
const tokenDecimals = 18;
const tokenImage = 'https://www.chadtoken.org/logo.png';

export default function AddToken() {
  const { provider, account }: any = useWeb3React();

  const handleClick = async () => {
    try {
      // wasAdded is a boolean. Like any RPC method, an error can be thrown.
      const wasAdded = await provider.send('wallet_watchAsset',
        {
          type: 'ERC20', // Initially only supports ERC-20 tokens, but eventually more!
          options: {
            address: tokenAddress, // The address of the token.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
            decimals: tokenDecimals, // The number of decimals in the token.
            image: tokenImage, // A string URL of the token logo.
          },
        });

      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <Button
    variant="outlined"
    onClick={handleClick}
    size="large">
    <Stack
      direction="row"
      spacing={1}
      justifyItems="center"
      alignItems="center">
      <img width="24px" style={{ borderRadius: '25px' }} src="https://www.chadtoken.org/logo.png" />
      <Typography>Add $CHAD to wallet</Typography>
    </Stack>
  </Button>
}