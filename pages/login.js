import { Box, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/forms/LoginForm';
import { useAuthContext } from '../context/authContext';

const GoogleButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: #757575;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const Login = () => {
  const { isUserAuthenticated, loginWithGoogle } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    isUserAuthenticated() ? router.push('/') : null;
  }, [isUserAuthenticated, router]);

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 600, mr: 2 }}>
        Login
      </Typography>
      <Typography variant="subtitle2" sx={{}}>
        If you don&apos;t have an account register
      </Typography>
      <Typography variant="subtitle2" sx={{ display: 'inline' }}>
        You can
      </Typography>{' '}
      <Link href="/signup" passHref>
        <MuiLink href="#" underline="hover" variant="subtitle2" sx={{ display: 'inline' }}>
          Register here!
        </MuiLink>
      </Link>
      <LoginForm />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="caption" sx={{}}>
          or cantinue with
        </Typography>
        <GoogleButton onClick={loginWithGoogle} />
      </Box>
    </Box>
  );
};

export default Login;
