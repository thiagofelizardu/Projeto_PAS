import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const options = [
  { label: 'Cadastre-se', path: '/sign-up' },
  { label: 'Entrar', path: '/sign-in' },
  { label: 'Profile', path: '/profile' },
  { label: 'Divulgar Espaço', path: '/register-espaco' },
  { label: 'Sair', path: '/login' }, 
];

const ITEM_HEIGHT = 48;

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { userName, isLoggedIn, logout } = useAuth(); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); 
    history.push('/login');
  };

  return (
    <Container display='relative'>
      <Container className='flex'>
        <Box
          onClick={handleClick}
          sx={{
            padding: '0.7rem',
            '@media (min-width: 768px)': {
              paddingY: '0.25rem',
            },
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.2rem',
            borderRadius: '9999px',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <MenuIcon fontSize="large" sx={{ fontSize: 30, color: '#ffffff' }} />
          <AccountCircleIcon sx={{ fontSize: 30, color: '#ffffff' }} />
        </Box>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {userName && <h4 style={{ marginLeft: '6px' }}>Olá, {userName}</h4>}
          <hr />
          {options.map((option) => (
            !(isLoggedIn && (option.label === 'Cadastre-se' || option.label === 'Entrar')) &&(
              <MenuItem
                key={option.label}
                selected={isLoggedIn && option.label === 'Profile'}
                onClick={option.label === 'Sair' ? handleLogout : handleClose}
                component={Link}
                to={option.path}
              >
                {option.label}
              </MenuItem>
            )
          ))}
          <hr />
        </Menu>
      </Container>
    </Container>
  );
}

