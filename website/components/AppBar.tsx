import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ConnectButton from '../components/ConnectButton';
import Link from '../src/Link';

const pages = [
  { name: "Buy", href: "/#buy" },
  { name: "About", href: "/#about" },
  { name: "Tokenomics", href: "/#tokenomics" },
  { name: "Roadmap", href: "/#roadmap" },
];
const settings = ['Disconnect'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={0} color="inherit" position="relative">
      <Container maxWidth="xl">
        <Toolbar sx={{ mt: 2, mb: 2 }} disableGutters>
          <Grid alignItems="center" alignContent="center" justifyContent="space-between" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} container>
            <Grid item>
              <Link underline="none" href="/">
                <Grid alignItems="center" alignContent="center" container>
                  <Grid item>
                    <Avatar sx={{ mr: 2, width: 60, height: 60 }} src="/chadcolor.png"></Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="inherit" noWrap sx={{
                      fontWeight: 700,
                    }}>
                      Chad
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} underline="none" href={page.href}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <Link underline="none" href="/stake">
                <MenuItem disabled onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Stake</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <Link
              underline="none"
              href="/">
              <Avatar sx={{ mr: 2, width: 60, height: 60 }} src="/chadcolor.png"></Avatar>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{ my: 2 }}
              >
                {page.name}
              </Button>
            ))}
            <Button disabled href="/stake" sx={{ my: 2 }} variant="outlined">
              Stake
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Connect">
              {/* <Button sx={{ display: { xs: 'none', md: 'flex' } }} variant="contained" onClick={handleOpenUserMenu}>
                Connect
              </Button> */}
              <ConnectButton sx={{ display: { xs: 'none', md: 'flex' } }} variant="contained" onClick={handleOpenUserMenu} />
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;