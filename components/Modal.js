import CloseIcon from '@mui/icons-material/Close';
import { Box, Grow, IconButton, Modal as MuiModal, Paper, Typography } from '@mui/material';

const Modal = (props) => {
  const { title, width, children, open, onClose, ...rest } = props;

  return (
    <MuiModal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={open}
      onClose={onClose}
      closeAfterTransition
      {...rest}
    >
      <Grow in={open}>
        <Paper
          elevation={8}
          sx={{
            backgroundColor: 'white',
            boxShadow: 16,
            paddingBottom: 5,
            paddingTop: 4,
            paddingLeft: 7,
            paddingRight: 7,
            borderRadius: '8px',
            outline: 'none',
            width: '500px', //({ width }) => theme.spacing(width),
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '-50px',
              marginTop: '-26px',
            }}
          >
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {title && (
              <Typography
                align="center"
                sx={{
                  marginBottom: theme.spacing(3),
                  fontSize: '1.375rem', // 22px
                  fontWeight: 'bold',
                  lineHeight: '1.4rem',
                }}
              >
                {title}
              </Typography>
            )}
            {children}
          </Box>
        </Paper>
      </Grow>
    </MuiModal>
  );
};

export default Modal;
