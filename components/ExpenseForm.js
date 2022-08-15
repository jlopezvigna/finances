import { Button, MenuItem, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { addDoc, collection, doc, onSnapshot, orderBy, query, Timestamp, updateDoc } from 'firebase/firestore';
import { capitalize } from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/authContext';
import { useExpenseContext } from '../context/expenseContext';
import { db } from '../firebase';
import { useToast } from './toast/ToastContainer';

const ExpenseForm = ({ onUpdate, onCreate }) => {
  const { setExpense, data } = useExpenseContext();
  const { data: expense } = data.expense;
  const { showAlert } = useToast();
  const { user } = useAuthContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setCategories(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        })),
      );
    });

    return unsubscribe;
  }, []);

  const onSubmit = async () => {
    if (expense.id) {
      const docRef = doc(db, 'expenses', expense.id);
      const formatedValue = Timestamp.fromDate(moment(expense.date).toDate());
      const expenseUpdated = { ...expense, date: formatedValue };
      updateDoc(docRef, expenseUpdated);
      showAlert('info', `Expense with id ${docRef.id} is updated successfully`);
      setExpense();
      onUpdate();
    } else {
      const collectionRef = collection(db, 'expenses');
      const formatedValue = Timestamp.fromDate(moment(expense.date).toDate());
      const docRef = await addDoc(collectionRef, { ...expense, date: formatedValue, uid: user.uid });
      showAlert('success', `Expense with id ${docRef.id} is added successfully`);
      setExpense();
      onCreate();
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Details"
        margin="normal"
        size="small"
        value={expense.details}
        onChange={(e) => setExpense({ ...expense, details: e.target.value })}
      />
      <TextField
        fullWidth
        label="Amount"
        margin="normal"
        size="small"
        type="number"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />
      <TextField
        fullWidth
        label="Category"
        margin="normal"
        select
        size="small"
        value={expense.categoryId}
        onChange={(e) => setExpense({ ...expense, categoryId: e.target.value })}
      >
        {categories.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {capitalize(option.name)}
          </MenuItem>
        ))}
      </TextField>
      <DatePicker
        label="Date"
        value={expense.date}
        onChange={(newValue) => setExpense({ ...expense, date: newValue })}
        renderInput={(params) => <TextField fullWidth size="small" margin="normal" {...params} />}
      />

      <Button fullWidth color="secondary" variant="contained" sx={{ mt: 3, mb: 3 }} onClick={onSubmit}>
        {expense.id ? 'Update Expense' : 'Add expense'}
      </Button>
    </div>
  );
};

export default ExpenseForm;
