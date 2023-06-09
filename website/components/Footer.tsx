import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Icon from '@mui/material/Icon';

export default function Footer() {
  return (
    <React.Fragment>
      <Stack
        sx={{ pt: 9 }}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <img src="/pepeapproval.svg" width="25%" />
        <IconButton size="large" target="_blank" href="https://twitter.com/ChadTokenOrg">
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" target="_blank" href="https://t.me/chadtokenorg">
          <TelegramIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" target="_blank" href="https://etherscan.io/token/0xb4577d084f289e696ddfac178c11663e573900f1">
          <Icon style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} fontSize="large">
            <img width="80%" src="/etherscanlogo.svg" />
          </Icon>
        </IconButton>
      </Stack>
      <Stack
        sx={{ pt: 4, color: '#3c4043' }}
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ textAlign: 'center' }}>
          $CHAD is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
        </Box>
        <Box>
          ChadToken.org
        </Box>
      </Stack>
    </React.Fragment>
  );
}