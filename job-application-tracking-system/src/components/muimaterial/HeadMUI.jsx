import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import SideBarMUI from './SideBarMUI.jsx'
export default function ButtonAppBar() {

  const navigate=useNavigate();

  const handleClick = () =>{
    navigate("/SignIn");
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            sx={{ mr: 70 }}
          >
            <MenuIcon />
            <SideBarMUI/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome HR!
          </Typography>
          <Button color="inherit" onClick={handleClick}>Login</Button>
          <Button color="inherit" onClick={()=>navigate("/SignUp")}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}