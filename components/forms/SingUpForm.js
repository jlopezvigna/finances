import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useAuthContext } from '../../context/authContext';

const SingUpForm = () => {
  const { register } = useAuthContext();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = async () => {
    await register(credentials.email, credentials.password);
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
        size="small"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        margin="normal"
        size="small"
        type="password"
        value={credentials.confirmPassword}
        onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
      />

      <Button fullWidth color="secondary" variant="contained" sx={{ mt: 3, mb: 3 }} onClick={onSubmit}>
        Register
      </Button>
    </div>
  );
};

export default SingUpForm;
