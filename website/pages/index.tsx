import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import styles from './index.module.css';

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
  margin-bottom: 5.6px;
`;

const Caption = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  line-height: 1.625;
  font-size: 16px;
  margin-bottom: 5.6px;
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
              variant="h1"
              align="center"
              color="text.primary"
              sx={{ fontFamily: "Rock Salt" }}
              gutterBottom
              className={styles.floating}
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
                  <img
                    style={{
                      alignSelf: 'center',
                      transform: 'scale(-1, 1)'
                    }}
                    width="75%"
                    alt="standing Chad"
                    src="/originalchad.png" />
                </CenterGrid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Headline>
                      About $CHAD
                    </Headline>
                    <Stack spacing={2}>
                      <Caption>
                        Yes, Chad is over the stupid dog meme coins. No one cares. It is time to change that and take over the meme tokens game. The internet is filled with Wojak, Pepe, and Chad memes so it is time for the light to shine on real meme tokens like $CHAD.
                      </Caption>
                      <img src="/yeschatballoon.svg" width="250rem" />
                    </Stack>
                  </Paper>
                </Grid>
              </Page>
            </Section>

            <Section>
              <Page container>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Headline>
                      Tokenomics
                    </Headline>
                    <Caption>
                      Max supply is 1 trillion $CHAD tokens. No nonsense. No taxes. No presale. 90% is sent to Uniswap for liquidity with the LP tokens burned - meaning liquidity can never be removed. 10% is kept in a multi-sig wallet for future centralized exchange listings, bridges, and liquidity pools.
                    </Caption>
                    <Button sx={{ mt: 3 }} size="large" variant="contained" disableElevation>Proof of LP token burn</Button>
                  </Paper>
                </Grid>
                <CenterGrid item xs={12} md={6}>
                  <div style={{ alignSelf: 'center' }} className={styles.coin}></div>
                </CenterGrid>
              </Page>
            </Section>

            <Grid direction="column" justifyContent="center" alignItems="center" container>
              <Grid item>
                <Headline>
                  Roadmap
                </Headline>
              </Grid>
              <Grid item>
                <Box sx={{ mt: 4 }} />
                <Grid spacing={1} justifyContent="space-between" container>
                  {[
                    {
                      title: "Phase 1",
                      points: [
                        "website and social",
                        "build community",
                        "launch $CHAD token",
                        "Be a Chad, get bags swole"
                      ]
                    },
                    {
                      title: "Phase 2",
                      points: [
                        "CoinGecko & CMC listing",
                        "Contract audit",
                        "Partnerships and contests",
                        "Over 1000 holders"
                      ]
                    },
                    {
                      title: "Phase 3",
                      points: [
                        "CEX listings",
                        "Over 50,000 holders",
                        "Chad merch and tools",
                        "More Chad gains"
                      ]
                    }
                  ].map((data) => (
                    <Grid key={data.title} item>
                      <Paper elevation={0} sx={{
                        p: 3,
                        borderRadius: '12px',
                        width: 260,
                        border: '0.5px solid gray'
                      }}>
                        <Stack>
                          <Typography variant="h6">
                            {data.title}
                          </Typography>
                          <Box sx={{ pt: 2 }} >
                            <Stack spacing={1}>
                              {data.points.map((point) => <Box key={point}>
                                {`• ${point}`}
                              </Box>)}
                            </Stack>
                          </Box>
                        </Stack>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Footer />
          </Container>
        </Box>
      </main>
    </Box>
  );
}