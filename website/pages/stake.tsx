import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
              Mint $YES
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              By staking $CHAD, $PEPE, $WOJAK, or $XEN.
            </Typography>
            
            <Footer />
          </Container>
        </Box>
      </main>
    </Box>
  );
}