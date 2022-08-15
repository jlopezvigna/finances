import { Alert, Container, Snackbar, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from 'react';
import Tabs from '../components/Tabs';
import { ToastContext } from '../components/toast/ToastContainer';
import AuthProvider from '../context/authContext';
import CategoryProvider from '../context/categoryContext';
import ExpenseProvider from '../context/expenseContext';
import '../styles/globals.css';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ showAlert }}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <AuthProvider>
            <CategoryProvider>
              <ExpenseProvider>
                <Container
                  maxWidth="sm"
                  sx={{
                    height: '100vh',
                  }}
                >
                  <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                      {alertMessage}
                    </Alert>
                  </Snackbar>
                  <Component {...pageProps} />
                  <Tabs />
                </Container>
              </ExpenseProvider>
            </CategoryProvider>
          </AuthProvider>
        </LocalizationProvider>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}
