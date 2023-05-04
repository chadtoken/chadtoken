import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

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
              Staking
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Mint $YES by staking $CHAD, $PEPE, $WOJAK, or $XEN
            </Typography>
            <Stack
              alignItems="center"
              justifyContent="center">
              <Box sx={{ width: { xs: '100%', md: 555 } }}>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                  <Button size="large">Deposit</Button>
                  <Button size="large">Withdraw</Button>
                </ButtonGroup>
              </Box>
            </Stack>
            <Footer />
          </Container>
        </Box>
      </main>
    </Box>
  );
}