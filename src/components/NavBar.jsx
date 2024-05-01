import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import UserMenu from './navBar/UserMenu';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';

export default function ButtonAppBar() {
  return (

    <Container sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1976d2',
      height: '60px',
      margin: '0'
    }}>
      <Box sx={{alignItems: 'center'}}>
        <AdbIcon sx={{ fontSize: 30, color: '#ffffff' }}/>
        <Typography variant="h3" component={Link} to='/home' sx={{
          fontWeight: 700,
          fontFamily: 'monospace',
          flexGrow: 1,
          letterSpacing: '.3rem',
          textDecoration: 'none',
          color: 'inherit',
          color: '#ffffff'
        }}>
          Logo
        </Typography>
      </Box>
      <Box >
        <UserMenu />
      </Box>
    </Container>
  );
}