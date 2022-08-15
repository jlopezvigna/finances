import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Card, CardHeader, IconButton, ListItemText, Menu, MenuItem } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import { capitalize, upperCase } from 'lodash';
import moment from 'moment';
import { useState } from 'react';
import { db } from '../firebase';
import { useToast } from './toast/ToastContainer';

const Todo = ({ id, name, color, timestamp, onEdit }) => {
  const { showAlert } = useToast();
  const [anchorEl, setAnchorEl] = useState(null);

  const deleteCategory = async (e, id) => {
    setAnchorEl(null);
    e.stopPropagation();
    const docRef = doc(db, 'categories', id);
    await deleteDoc(docRef);
    showAlert('error', `Category with id ${id} deleted successfully`);
  };

  const editCategory = (e, id, name, color) => {
    setAnchorEl(null);
    e.stopPropagation();
    onEdit({ id, name, color });
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{ bgcolor: color }}>
            {upperCase(name[0])}
          </Avatar>
        }
        action={
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
              <MenuItem dense onClick={(e) => editCategory(e, id, name, color)}>
                <ListItemText>Edit</ListItemText>
              </MenuItem>

              <MenuItem dense onClick={(e) => deleteCategory(e, id)}>
                <ListItemText
                  sx={{
                    color: 'red',
                  }}
                >
                  Delete
                </ListItemText>
              </MenuItem>
            </Menu>
          </>
        }
        title={capitalize(name)}
        subheader={moment(timestamp).format('DD/MM/YYYY')}
      />
    </Card>
  );
};

export default Todo;
