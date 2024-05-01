import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Page404() {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h1">ERRO - 404</Typography>
    </Container>
  );
}
