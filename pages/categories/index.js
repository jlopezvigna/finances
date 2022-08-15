import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CategoryForm from '../../components/CategoryForm';
import Modal from '../../components/Modal';
import TodoList from '../../components/TodoList';
import { useAuthContext } from '../../context/authContext';
import { useCategoryContext } from '../../context/categoryContext';
import useToggle from '../../hooks/useToggle';

const Categories = () => {
  const router = useRouter();
  const { isUserAuthenticated } = useAuthContext();
  const [open, toggle] = useToggle();
  const { setCategory } = useCategoryContext();

  useEffect(() => {
    !isUserAuthenticated() ? router.push('/login') : null;
  }, [isUserAuthenticated, router]);

  const editCategory = (c) => {
    setCategory(c);
    toggle();
  };

  const createCategory = () => {
    setCategory();
    toggle();
  };

  return (
    <>
      <Box display="flex" sx={{ my: 3 }}>
        <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 600, mr: 2 }}>
          Categories
        </Typography>

        <Button variant="contained" onClick={createCategory}>
          Add
        </Button>
      </Box>

      <TodoList onEdit={editCategory} />
      <Modal open={open} onClose={toggle}>
        <CategoryForm onCreate={toggle} onUpdate={toggle} />
      </Modal>
    </>
  );
};

export default Categories;
