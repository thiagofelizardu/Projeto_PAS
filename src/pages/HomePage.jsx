import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, Card, CardContent, CardMedia, Box, CardActionArea } from '@mui/material';
import { useCadastro } from '../context/CadastroContext';
import casastatic from '../imagens/masaoPipa.jpg';
import casastatic2 from '../imagens/MansaoJP.jpg';

const HomePage = () => {
  const { cadastro } = useCadastro();

  // Informações estáticas da casa
  const casaEstatica1 = {
    location: "Mansão Pipa Natal",
    info: "Pipa Rio Grande Do Norte",
    description: "Mansão disponivel",
    price: "1.465$/dia",
    imagens: casastatic 
  };
  
  const casaEstatica2 = {
    location: "Mansão João Pessoa",
    info: "João Pessoa PB",
    description: "Mansão disponivel",
    price: "1.800$/dia",
    imagens: casastatic2 
  };

  // Adicionando a casa estática à matriz cadastro
  const cadastroCompleto = [casaEstatica1 ,casaEstatica2, ...cadastro];

  return (
    <Container>
      <Box sx={{
         flexGrow: 1,
         marginTop: 12,
         marginRight: 12,
         marginBottom: 133,
      }}>
        <Grid container spacing={2}>
          {cadastroCompleto.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.imagens} // Aqui, não precisa usar URL.createObjectURL para imagens estáticas
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
      </Box>
    </Container>
  );
};

export default HomePage;
