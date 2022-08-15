import { Grid } from '@mui/material';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import Todo from './Todo';

const TodoList = ({ onEdit }) => {
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

  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} key={category.id}>
          <Todo {...category} onEdit={onEdit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
