import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom';
import logo from '../logo.png'

const pages = ['Knowledge', 'Skill', 'Behaviour'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" style={{height: "auto", width: "120px"}}/> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
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
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>
                    {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                    <Link style={{textDecoration: "none", color: "white"}}to={`/${page}`}>
                    {page}
                    </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
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


































//-----------------------------------------------
// import React from 'react'
// import logo from '../logo.png'
// import logoMobile from '../logoMobile.svg'
// import {Toolbar, Typography, AppBar, CssBaseline} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'

// const styles = makeStyles({
//     bar:{
//         paddingTop: "1.15rem",
//         backgroundColor: "#fff",
//         '@media (max-width:780px)': { 
//            flexDirection: "column"
//           }
//     },
//     logo: {
//         width: "15%", 
//         '@media (max-width:780px)': { 
//            display: "none"
//            }
//     },
//     logoMobile:{
//         width: "100%", 
//         display: "none", 
//         '@media (max-width:780px)': { 
//             display: "inline-block"
//             }
//     },
//     // menuItemK: {
//     //     width: 100,
//     //     padding: 5,
//     //     margin: 15,
//     //     borderRadius: 10,
//     //     border: "solid 3px black",
//     //     cursor: "pointer", 
//     //     flexGrow: 1,
//     //     "&:hover": {
//     //         color:  "#4f25c8",
//     //         boxShadow: "2px 2px black",
//     //     },
//     //     '@media (max-width:780px)': { 
//     //         paddingBottom: "1rem"    }
//     // },
//     // menuItemS: {
//     //     width: 100,
//     //     padding: 5,
//     //     margin: 15,
//     //     borderRadius: 10,
//     //     border: "solid 3px black",
//     //     cursor: "pointer", 
//     //     flexGrow: 1,
//     //     "&:hover": {
//     //         color:  "#4f25c8",
//     //         boxShadow: "2px 2px black",
//     //     },
//     //     '@media (max-width:780px)': { 
//     //         paddingBottom: "1rem"    }
//     // },
//     // menuItemB: {
//     //     width: 100,
//     //     padding: 5,
//     //     margin: 15,
//     //     borderRadius: 10,
//     //     cursor: "pointer", 
//     //     border: "solid 3px black",
//     //     flexGrow: 1,
//     //     "&:hover": {
//     //         color:  "#4f25c8",
//     //         boxShadow: "2px 2px black",
//     //     },
//     //     '@media (max-width:780px)': { 
//     //         paddingBottom: "1rem"    }
//     // }
// })

// function NavBar() {
//     const classes = styles()
//     return (
//         <AppBar position="static">
//             <CssBaseline />
//             <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
//                 <img src={logo} alt="logo" className={classes.logo}/> 
//                 <img src={logoMobile} alt="logoMobile" className={classes.logoMobile}/> 
//                 <div classname={classes.navlinks}>
//                     <Link to="/" className={classes.navlinks}>
//                         Home
//                     </Link>
//                     <Link to="/knowledge" className={classes.navlinks}>
//                         Knowledge
//                     </Link>
//                     <Link to="/" className={classes.navlinks}>
//                         Skill
//                     </Link>
//                     <Link to="/" className={classes.navlinks}>
//                         Behaviour
//                     </Link>
//                 </div>

//                 {/* <Typography variant="h6" className={classes.menuItemK}>
//                    Knowledge
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItemS}>
//                     Skill
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItemB}>
//                     Behaviour
//                 </Typography> */}
//             </Toolbar>
//         </AppBar>    
//     )
// }

// export default NavBar
