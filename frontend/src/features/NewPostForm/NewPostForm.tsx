import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../app/hook';
import { fetchAll, postOne } from '../News/newsThunk';
import FileInput from '../../components/UI/FileInput/FileInput';
import { IFormState } from '../../types';

const initialState: IFormState = {
  title: '',
  content: '',
  image: null,
};

const NewPostForm = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<IFormState>(initialState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    setState(prevState => ({ ...prevState, [name]: files ? files[0] : value }));
  };

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(postOne(state));
    setState(initialState);
    await dispatch(fetchAll());
  };

  return (
    <Box component="form"
         display="flex"
         flexDirection="column"
         gap={2}
         onSubmit={sendData}
    >
      <Typography variant="h3">
        Add new post
      </Typography>

      <Box component="div"
           display="flex"
           flexDirection="column"
           gap={2}
      >

      <TextField
        required
        label="Title"
        name="title"
        value={state.title}
        onChange={changeValue}
      />
      <TextField
        required
        multiline
        rows={4}
        label="Content"
        name="content"
        value={state.content}
        onChange={changeValue}
      />

      <FileInput onChange={changeValue} image={state.image} name="image" label="Browse" />

      <Button
        variant="outlined"
        sx={{ width: 100 }}
        type="submit"
      >
        Save
        {
          // messagePostLoading ?
          //   <Box sx={{ display: 'flex' }}>
          //     <CircularProgress size={30} />
          //   </Box> : null
        }
      </Button>
      </Box>
    </Box>
  );
};

export default NewPostForm;