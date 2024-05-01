import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { validateFields } from '../../components/validate/ValidateCadastro';
import { useAuth } from '../../context/AuthProvider';

import ThemeProvider from '../../theme';


export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phone: '',
    receiveEmails: false,
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValidationErrors = validateFields(formValues);
    if (Object.keys(newValidationErrors).length > 0) {
      setValidationErrors(newValidationErrors);
    } else {

      setValidationErrors({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        phone: '',
        receiveEmails: '',
      });
      
      login(formValues.firstName);
      navigate('/home');
    }
  };

  return (
    <ThemeProvider>
      <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={Boolean(validationErrors.firstName)}
                  helperText={validationErrors.firstName || ''}
                  onChange={handleChange}
                  value={formValues.firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Primeiro Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={Boolean(validationErrors.lastName)}
                  helperText={validationErrors.lastName || ''}
                  onChange={handleChange}
                  value={formValues.lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Segundo Nome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={Boolean(validationErrors.dateOfBirth)}
                  helperText={validationErrors.dateOfBirth || ''}
                  required
                  fullWidth
                  id="date"
                  label="Data de Nascimento"
                  name="dateOfBirth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  value={formValues.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={Boolean(validationErrors.phone)}
                  helperText={validationErrors.phone || ''}
                  onChange={handleChange}
                  value={formValues.phone}
                  required
                  fullWidth
                  id="phone"
                  label="Telefone"
                  name="phone"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(validationErrors.email)}
                  helperText={validationErrors.email || ''}
                  onChange={handleChange}
                  value={formValues.email}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(validationErrors.password)}
                  helperText={validationErrors.password || ''}
                  onChange={handleChange}
                  value={formValues.password}
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar-se
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/sign-in" variant="body2">
                  Já possui conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
