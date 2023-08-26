import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface State {
  author: string;
  text: string;
}

const initialState: State = {
  author: '',
  text: '',
};

const CommentsForm = () => {
  const [state, setState] = useState<State>(initialState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Box component="form">
      <Typography variant="h3" margin="30px 0">
        Add comment
      </Typography>

      <Box component="div"
           display="flex"
           flexDirection="column"
           gap={2}
      >
        <TextField
          label="Name"
          name="author"
          value={state.author}
          onChange={changeValue}
        />

        <TextField
          label="Comment"
          name="text"
          value={state.text}
          onChange={changeValue}
        />

        <Button variant="contained"
                sx={{ width: 100 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default CommentsForm;