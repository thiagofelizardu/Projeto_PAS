import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Container } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = () => {
  return (
    <Container>
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1500,
        flexGrow: 1,
        marginTop:2,
        marginBottom: 2,
        padding:'80px 140px 80px 40px',
        backgroundColor: '#a3ceef',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 400, height: 300 }}>
            <Img alt="complex" src="src\imagens\casa1.jpg" style={{ width: '400px', height: '400px' }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license 
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Alugar
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>

      </Grid>
      <Grid item>
        <ButtonBase sx={{ width: 400, height: 300 }}>
          <Img alt="complex" src="src\imagens\casa2.jpg" style={{ width: '400px', height: '400px' }} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: 1030115
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Alugar
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
            $25.00
          </Typography>
        </Grid>
        
      </Grid>
      <Grid item>
        <ButtonBase sx={{ width: 400, height: 300 }}>
          <Img alt="complex" src="src\imagens\casa2.jpg" style={{ width: '400px', height: '400px' }} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: 1030115
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Alugar
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
            $25.00
          </Typography>
        </Grid>
        
      </Grid>
      <Grid item>
        <ButtonBase sx={{ width: 400, height: 300 }}>
          <Img alt="complex" src="src\imagens\casa2.jpg" style={{ width: '400px', height: '400px' }} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: 1030115
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Alugar
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
            $25.00
          </Typography>
        </Grid>
        
      </Grid>
    </Paper>
    </Container>
    
  );
};

export default HomePage;
