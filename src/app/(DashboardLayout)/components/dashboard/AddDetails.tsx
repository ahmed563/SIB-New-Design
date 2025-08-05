// components/AddTextBox.tsx

import React from 'react';
import { Box, TextField } from '@mui/material';

const AddTextBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        border: '1px solid #BCBCBC',
        px: 2,
        pt:2,
        height:"106px"
      }}
    >
      <TextField
        multiline
        fullWidth
        placeholder="Add Details"
        variant="standard"
        InputProps={{
          disableUnderline: true,
          sx: {
            fontSize: '16px',
            color: '#212529',
          },
        }}
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          fontFamily: 'Dubai'
        }}
      />
    </Box>
  );
};

export default AddTextBox;
