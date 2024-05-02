import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function FooterBar() {
  return (
    <Box
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1976d2', 
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      borderTop: '1px solid #666',
      zIndex: 1000,
    }}
  >

      <Typography variant="body1" component={Link} to='/about' sx={{
        textDecoration: 'none',
        color: '#fff',
        marginRight: '20px',
      }}>
        Sobre nos
      </Typography>
      <Typography variant="body1" component={Link} to='/contact' sx={{
        textDecoration: 'none',
        color: '#fff',
        marginRight: '20px',
      }}>
        Contate-nos
      </Typography>
      <Typography variant="body1" component={Link} to='/privacy' sx={{
        textDecoration: 'none',
        color: '#fff',
      }}>
        Politica de Privacidade
      </Typography>
   </Box>
  );
}
