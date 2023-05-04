import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Mint <strong style={{ color: 'white' }}>$YES</strong> by staking $CHAD, $PEPE, $WOJAK, or $XEN
            </Typography>
            <Stack
              alignItems="center"
              justifyContent="center">
              <Box sx={{ width: { xs: '100%', md: 555 } }}>
                <ButtonGroup disableElevation disableFocusRipple disableRipple fullWidth variant="contained" aria-label="outlined primary button group">
                  <Button size="large">Deposit</Button>
                  <Button size="large">Withdraw</Button>
                </ButtonGroup>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Amount to stake
                </Typography>
                <TextField
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Button size="small">
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyItems="center"
                          alignItems="center">
                          <img width="24px" src="/logo.png" />
                          <Typography>$CHAD</Typography>
                          <ArrowDropDownIcon />
                        </Stack>
                      </Button>
                    </InputAdornment>,
                    endAdornment: <InputAdornment position="end">
                      <Button size="small">
                        max
                      </Button>
                    </InputAdornment>,
                  }}
                  fullWidth
                  sx={{ mt: 2 }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Stake amount for
                </Typography>
                ...
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Rate
                </Typography>
                ...
                <Button sx={{ mt: 2 }} variant="contained" fullWidth>
                  <strong>STAKE</strong>
                </Button>
                <Typography variant="h5" align="center" color="text.secondary" sx={{ mt: 3 }}>
                  Earned rewards
                </Typography>
                <TextField size="small" fullWidth sx={{ mt: 2 }} />
                <Button sx={{ mt: 2 }} color="success" variant="contained" fullWidth>
                  <strong>CLAIM</strong>
                </Button>
              </Box>
            </Stack>
            <Footer />
          </Container>
        </Box>
      </main>
    </Box>
  );
}