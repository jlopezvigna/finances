import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useAuthContext } from '../../context/authContext';

const LoginForm = () => {
  const { login } = useAuthContext();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    await login(credentials.email, credentials.password);
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        size="small"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <TextField
        fullWidth
        label="Password"
        margin="normal"
        type="password"
        size="small"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Box textAlign="right">
        <Typography variant="caption">Forgot password ?</Typography>
      </Box>

      <Button fullWidth color="secondary" variant="contained" sx={{ mt: 3, mb: 3 }} onClick={onSubmit}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
