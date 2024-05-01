import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import CabinIcon from '@mui/icons-material/Cabin';
import ThemeProvider from '../theme';
import { CadastroProvider, useCadastro } from '../context/CadastroContext';
import FormatPrice from '../components/FormatPrice';

export default function RegistrarEspaco() {
  const navigate = useNavigate();


  const { addCadastro } = useCadastro();

  const [formValues, setFormValues] = useState({
    location: '',
    info: '',
    imagens: null,
    descrition: '',
    price: ''
  });

  const handlePriceChange = (value) => {
    let numericValue = parseFloat(value.replace(/[^\d.-]/g, '')) / 100;
    numericValue = isNaN(numericValue) ? 0 : numericValue;
  
    const formattedPrice = FormatPrice(numericValue);
    setFormValues({
      ...formValues,
      priceRaw: numericValue,
      price: formattedPrice,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCadastro(formValues);
    console.log(formValues);
    navigate('/home');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormValues({ ...formValues, imagens: file });
  };

  return (
    <ThemeProvider>
      <CadastroProvider>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              height: '100vh',
              marginTop: 17,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <CabinIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastrar Espaço
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setFormValues({ ...formValues, location: e.target.value })}
                    value={formValues.location}
                    required
                    fullWidth
                    id="location"
                    label="Localização"
                    name="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setFormValues({ ...formValues, info: e.target.value })}
                    value={formValues.info}
                    required
                    fullWidth
                    id="info"
                    label="Informações"
                    name="info"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleImageChange}
                    required
                    fullWidth
                    id="imagens"
                    label="Imagens"
                    name="imagens"
                    type="file"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      accept: 'imagens/*',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setFormValues({ ...formValues, descrition: e.target.value })}
                    value={formValues.descrition}
                    required
                    fullWidth
                    id="descrition"
                    label="Descrição"
                    name="descrition"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => handlePriceChange(e.target.value)}
                    value={formValues.price}
                    required
                    fullWidth
                    id="price"
                    label="Preço"
                    name="price"
                    type="text"
                 
                  />

                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar Espaço
              </Button>
            </Box>
          </Box>
        </Container>
      </CadastroProvider>
    </ThemeProvider>
  );
}
