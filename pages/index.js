import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthContext } from '../context/authContext';

export default function Home() {
  const router = useRouter();
  const { isUserAuthenticated, logout } = useAuthContext();

  useEffect(() => {
    !isUserAuthenticated() ? router.push('/login') : null;
  }, [isUserAuthenticated, router]);

  return (
    <>
      <Box display="flex" sx={{ my: 3 }}>
        <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 600, mr: 2 }}>
          Home
        </Typography>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </Box>
    </>
  );
}
