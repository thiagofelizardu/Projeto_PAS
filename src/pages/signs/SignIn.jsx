import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { validateSignIn } from '../../components/validate/ValidateSignIn';
import { useAuth } from '../../context/AuthProvider';
import ThemeProvider from '../../theme';


export default function SignIn() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [validationErrors, setValidationErrors] = React.useState({});

  const [formValues, setFormValues] = React.useState({
    username:'Admin',
    email: '',
    password: '',

    receiveEmails: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValidationErrors = validateSignIn(formValues);
    if (Object.keys(newValidationErrors).length > 0) {
      setValidationErrors(newValidationErrors);
    } else {

      setValidationErrors({
        email: '',
        password: '',
      });

      login(formValues.username);
      navigate('/home');
    }
  };

  return (
    <ThemeProvider>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={Boolean(validationErrors.email)} // Aplica a classe de erro se houver erro de validação
                helperText={validationErrors.email || ''} // Exibe a mensagem de erro
                margin="normal"
                onChange={handleChange}
                value={formValues.email}
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              /></Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={Boolean(validationErrors.password)}
                helperText={validationErrors.password || ''}
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                value={formValues.password}
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              /></Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-se de mim"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu à senha?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/sign-up" variant="body2">
                  {"Não tem uma conta? Inscrever-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}
