import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import moment from 'moment';
import { useState } from 'react';
import { db } from '../firebase';
import formats from '../utils/formats';
import { useToast } from './toast/ToastContainer';

const Expense = ({ id, amount, details, date, categoryId, onEdit }) => {
  const { showAlert } = useToast();
  const [anchorEl, setAnchorEl] = useState(null);

  const deleteExpense = async (e, id) => {
    setAnchorEl(null);
    e.stopPropagation();
    const docRef = doc(db, 'expenses', id);
    await deleteDoc(docRef);
    showAlert('error', `Expense with id ${id} deleted successfully`);
  };

  const editCategory = (e, id, amount, details, date, categoryId) => {
    setAnchorEl(null);
    e.stopPropagation();
    onEdit({ id, amount, details, date, categoryId });
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Typography variant="subtitle1">{details}</Typography>
        <Typography variant="caption">{moment(date).format('DD/MM/YYYY')}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="subtitle2">{formats.currency(amount)}</Typography>
        <>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem dense onClick={(e) => editCategory(e, id, amount, details, date, categoryId)}>
              <ListItemText>Edit</ListItemText>
            </MenuItem>

            <MenuItem dense onClick={(e) => deleteExpense(e, id)}>
              <ListItemText
                sx={{
                  color: 'red',
                }}
              >
                Delete
              </ListItemText>
            </MenuItem>
          </Menu>
        </>{' '}
      </Box>
    </Box>
  );
};

export default Expense;
