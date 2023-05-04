import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import AppBar from '../components/AppBar';

const UniswapWidget = dynamic(
  () => import('../components/UniswapWidget'),
  { ssr: false }
);

const Section = styled.section`
  margin: 180px 0;
`;

const Headline = styled.div`
  line-height: 1.18182;
  font-size: 44px;
  letter-spacing: -.5;
  margin-bottom: 5.6;
`;

const Caption = styled.div`
  color: #3c4043;
  font-weight: 300;
  line-height: 1.625;
  font-size: 16px;
  margin-bottom: 5.6;
`;

const Page = styled(Grid)`
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 600px) {
    max-width: 600px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
  };
  @media (min-width: 960px) {
    box-sizing: border-box;
    max-width: 872px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  };
`;

const CenterGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

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
            <Grid sx={{ mt: 4 }} justifyContent="center" alignItems="center" container>
              <Grid item>
                <UniswapWidget />
              </Grid>
            </Grid>

            <Section>
              <Page container>
                <CenterGrid item xs={12} md={6}>
                  <img style={{ alignSelf: 'center' }} width="75%" alt="standing Chad" src="/originalchad.png" />
                </CenterGrid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Headline>
                      About
                    </Headline>
                    <Caption>
                      Chad is over the stupid dog meme coins. No one cares. It is time to change that and take over the meme tokens game. The internet is filled with Wojak, Pepe, and Chad memes so it is time for the light to shine on real meme tokens like $CHAD.
                    </Caption>
                  </Paper>
                </Grid>
              </Page>
            </Section>

            <Section>
              <Page container>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Headline>
                      Tokenmomics
                    </Headline>
                    <Caption>
                      text here
                    </Caption>
                  </Paper>
                </Grid>
                <CenterGrid item xs={12} md={6}>
                  <img style={{ alignSelf: 'center' }} width="75%" alt="standing Chad" src="/logo.png" />
                </CenterGrid>
              </Page>
            </Section>

            <Section>
              <Page container>
                <CenterGrid item xs={12} md={6}>
                  <img style={{ alignSelf: 'center' }} width="75%" alt="standing Chad" src="/road.png" />
                </CenterGrid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Headline>
                      Roadmap
                    </Headline>
                    <Caption>
                      text here
                    </Caption>
                  </Paper>
                </Grid>
              </Page>
            </Section>

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