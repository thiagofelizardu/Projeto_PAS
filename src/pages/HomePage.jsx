import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, Typography, Card, CardContent, CardMedia, Box, CardActionArea } from '@mui/material';
import { useCadastro } from '../context/CadastroContext';

const HomePage = () => {
  const { cadastro } = useCadastro();

  return (
    <Container>
      <Box sx={{
        flexGrow: 1,
        marginTop: 3,
      }}>
        <Grid>
          <Grid container spacing={2}>
            {cadastro.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={URL.createObjectURL(item.imagens)}
                      alt="Imagem"
                      style={{ width: '100%', height: 200, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="div">
                        {item.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.info}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Typography fontSize='' fontWeight="bold">
                        {`${item.price}`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
