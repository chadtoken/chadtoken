import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import AppBar from '../components/AppBar';

export default function Album() {
  return (
    <Box>
      <CssBaseline />
      <AppBar />
      <main>
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Mint $YES
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              By staking $CHAD, $PEPE, $WOJAK, or $XEN.
            </Typography>
            
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <IconButton size="large" target="_blank" href="https://twitter.com/ChadTokenOrg">
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton size="large" target="_blank" href="https://t.me/chadtokenorg">
                <TelegramIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Container>
        </Box>
      </main>
    </Box>
  );
}