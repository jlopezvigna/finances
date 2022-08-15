import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import ExpensesList from '../../components/ExpensesList';
import Modal from '../../components/Modal';
import { useAuthContext } from '../../context/authContext';
import { useExpenseContext } from '../../context/expenseContext';
import useToggle from '../../hooks/useToggle';

const Expenses = () => {
  const router = useRouter();
  const { isUserAuthenticated } = useAuthContext();
  const [open, toggle] = useToggle();
  const { setExpense } = useExpenseContext();

  useEffect(() => {
    !isUserAuthenticated() ? router.push('/login') : null;
  }, [isUserAuthenticated, router]);

  const editExpense = (exp) => {
    setExpense(exp);
    toggle();
  };

  const createExpense = () => {
    setExpense();
    toggle();
  };

  return (
    <>
      <Box display="flex" sx={{ my: 3 }}>
        <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 600, mr: 2 }}>
          Expenses
        </Typography>

        <Button variant="contained" onClick={createExpense}>
          Add
        </Button>
      </Box>

      <ExpensesList onEdit={editExpense} />

      <Modal open={open} onClose={toggle}>
        <ExpenseForm onCreate={toggle} onUpdate={toggle} />
      </Modal>
    </>
  );
};

export default Expenses;
