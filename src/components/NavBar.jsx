import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import UserMenu from './navBar/UserMenu';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function ButtonAppBar() {
  return (
    <Box sx={{
      position: 'fixed ',
      top: 0,
      left: 0,
      display: 'flex',
      zIndex: 9999,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1976d2',
      height: '60px',
      padding: '20px', 
      width: '100%', 
      margin: '0',
    }}>
      <Box sx={{alignItems: 'center', display: 'flex'}}>
        <HomeIcon sx={{ fontSize: 30, color: '#ffffff', marginRight: '10px' }}/>
        <Typography variant="h3" component={Link} to='/home' sx={{
          fontWeight: 700,
          fontFamily: 'monospace',
          flexGrow: 1,
          letterSpacing: '.3rem',
          textDecoration: 'none',
          color: '#ffffff',
        }}>
          Felizardo`s
        </Typography>
        <div style={{marginLeft: '20px', backgroundColor: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center'}}>
          <SearchIcon style={{padding: '10px', fontSize: '2.5rem'}}/>
          <InputBase
            placeholder="Pesquisar..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Box>
      <Box >
        <UserMenu />
      </Box>
   </Box>
  );
}
