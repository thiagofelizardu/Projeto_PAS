import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { Container, Box, Grid, Card, CardContent, Typography } from '@mui/material';


const Profile = () => {
  const { userName, } = useAuth();
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 12,
          marginRight: 12,
          marginBottom: 133,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={60} md={40}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Nome: {userName} 
                </Typography>
                <Typography variant="body2" color="text">
                  Email: Admim@hotmail.com
                </Typography>
                <Typography variant="body2" color="text">
                  Data de Nascimento: 00/00/2000
                </Typography>
                <Typography variant="body2" color="text">
                  Telefone: +55(88)99999-9999
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
