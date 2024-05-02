import React from "react";
import Grid from "@mui/material/Grid";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  CardActionArea,
} from "@mui/material";
import { useCadastro } from "../context/CadastroContext";
import casastatic from "../imagens/masaoPipa.jpg";
import casastatic2 from "../imagens/MansaoJP.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { cadastro } = useCadastro();

  // Informações estáticas das casas
  const casasEstaticas = [
    {
      location: "Mansão Pipa Natal",
      info: "Pipa Rio Grande Do Norte",
      description: "Mansão disponível",
      price: "1.465$",
      imagens: casastatic,
    },
    {
      location: "Mansão VIP",
      info: "João Pessoa PB",
      description: "Mansão disponível",
      price: "1.800$",
      imagens: casastatic2,
    },
  ];

  const casasTotais = [...casasEstaticas, ...cadastro];

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
        <Grid>
          <Grid container spacing={2}>
            {casasTotais.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                <Link to={`/inside/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={
                        typeof item.imagens === "string"
                          ? item.imagens
                          : URL.createObjectURL(item.imagens)
                      }
                      alt="Imagem"
                      style={{ width: "100%", height: 200, objectFit: "cover" }}
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
                      <Typography fontSize="" fontWeight="bold">
                        {`${item.price}/dia`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  </Link>
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
