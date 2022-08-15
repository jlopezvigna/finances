import { Button, ClickAwayListener, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import { useCategoryContext } from '../context/categoryContext';
import { db } from '../firebase';
import { useToast } from './toast/ToastContainer';

const CategoryForm = ({ onUpdate, onCreate }) => {
  const [open, setOpen] = useState(false);
  const { setCategory, data } = useCategoryContext();
  const { data: category } = data.category;

  const { showAlert } = useToast();

  const onSubmit = async () => {
    if (category.id) {
      const docRef = doc(db, 'categories', category.id);
      const categoryUpdated = { ...category, timestamp: serverTimestamp() };
      updateDoc(docRef, categoryUpdated);
      showAlert('info', `Category with id ${docRef.id} is updated successfully`);
      setCategory();
      onUpdate();
    } else {
      const collectionRef = collection(db, 'categories');
      const docRef = await addDoc(collectionRef, { ...category, timestamp: serverTimestamp() });
      showAlert('success', `Category with id ${docRef.id} is added successfully`);
      setCategory();
      onCreate();
    }
  };

  const changeColor = (color) => {
    setCategory({ ...category, color: color.hex });
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        size="small"
        value={category.name}
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />
      <Box display="flex" alignItems="center">
        <Typography sx={{ pr: 1 }}>Pick Color</Typography>

        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                backgroundColor: category.color,
                outline: 'none',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={handleClick}
            />
            {open ? (
              <Box
                sx={{
                  position: 'absolute',
                  top: 28,
                  right: 0,
                  left: 0,
                  zIndex: 1,
                  p: 1,
                }}
              >
                <SketchPicker color={category.color} onChange={changeColor} />
              </Box>
            ) : null}
          </Box>
        </ClickAwayListener>
      </Box>

      <Button fullWidth color="secondary" variant="contained" sx={{ mt: 3, mb: 3 }} onClick={onSubmit}>
        {category.id ? 'Update category' : 'Add category'}
      </Button>
    </div>
  );
};

export default CategoryForm;
