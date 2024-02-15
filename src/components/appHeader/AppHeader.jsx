import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import styles from './style.module.css'

import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

const pages = ['Top Questions', 'My Questions'];

function AppHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // TODO: Open user menu
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed"
        sx={{
            color: 'black',
            boxShadow: 0,
            gap: '12px',
        }}
        className={styles.appBar}

    >
      <Container maxWidth="xl">
     
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              marginRight: "12px",
            }}
          >
         
            ASK <span 
            style={{
              color: '#BB00DA'
            }}
            >IT</span>

          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={page.toLowerCase().split(' ').join('-')}
                    className={styles.navLink}
                    end={page.toLowerCase() === 'top-questions'}
                    
                  >
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ASK <span
            style={{
              color: '#BB00DA'
            }}
            >IT</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignSelf:"flex-end", justifyContent:"flex-end" }}
            className={styles.navMenu}
          >
            
              <NavLink
                end={true}
                to=""
                className={({ isActive, isPending }) =>
                  isPending ? styles.navLink : isActive ? styles.navLinkActive : styles.navLink
                }
                
                >
                Top Questions
                </NavLink>

                <NavLink
                to="my-questions"
                className={({ isActive, isPending }) =>
                  isPending ? styles.navLink : isActive ? styles.navLinkActive :styles.navLink
                }
                >
                My Questions
                </NavLink>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton onClick={handleOpenUserMenu} >
                <LogoutIcon
                    sx={{
                        color: 'black',
                    }}
                 />

              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;