import { Box, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SingUpForm from '../components/forms/SingUpForm';
import { useAuthContext } from '../context/authContext';

const SignUp = () => {
  const router = useRouter();
  const { isUserAuthenticated } = useAuthContext();

  useEffect(() => {
    isUserAuthenticated() ? router.push('/') : null;
  }, [isUserAuthenticated, router]);

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 600, mr: 2 }}>
        Sign Up
      </Typography>
      <Typography variant="subtitle2">If you already have an account register</Typography>
      <Typography variant="subtitle2" sx={{ display: 'inline' }}>
        You can
      </Typography>{' '}
      <Link href="/login" passHref>
        <MuiLink href="#" underline="hover" variant="subtitle2" sx={{ display: 'inline' }}>
          Login here!
        </MuiLink>
      </Link>
      <SingUpForm />
    </Box>
  );
};

export default SignUp;
