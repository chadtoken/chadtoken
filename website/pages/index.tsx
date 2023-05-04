import * as React from 'react';
import dynamic from 'next/dynamic'
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

const UniswapWidget = dynamic(
  () => import('../components/UniswapWidget'),
  { ssr: false }
);

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
              Yes Chad
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The most easy going and winning {"man's"} man meme on the internet.
            </Typography>
            <Grid justifyContent="center" alignItems="center" container>
              <Grid item>
                <UniswapWidget />
              </Grid>
            </Grid>
            <Box sx={{ mt: 5, mb: 5 }}>
              <Grid justifyContent="space-between" container>
                <Grid item>
                  hi
                </Grid>
                <Grid item>
                  hi
                </Grid>
              </Grid>
            </Box>
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