import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
function NavBar() {
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </NavLink>
        </Typography>
        <br></br>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/mobs" style={{ textDecoration: 'none', color: 'inherit' }}>
            Mobs
          </NavLink>
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/mobform" style={{ textDecoration: 'none', color: 'inherit' }}>
            Mob Form
          </NavLink>
        </Typography>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar