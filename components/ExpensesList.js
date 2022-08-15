import { Divider, Grid } from '@mui/material';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/authContext';
import { db } from '../firebase';
import Expense from './Expense';

const ExpensesList = ({ onEdit }) => {
  const [expenses, setExpenses] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!isEmpty(user)) {
      const collectionRef = collection(db, 'expenses');
      const q = query(collectionRef, where('uid', '==', user.uid), orderBy('date', 'desc'));

      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          setExpenses(
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
              date: doc.data().date?.toDate().getTime(),
            })),
          );
        },
        (error) => {
          console.log('Error: ', error);
        },
      );

      return unsubscribe;
    }
  }, [user]);

  return (
    <Grid container spacing={2}>
      {expenses.map((expense) => (
        <Grid item xs={12} key={expense.id}>
          <Expense {...expense} onEdit={onEdit} />
          <Divider />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExpensesList;
