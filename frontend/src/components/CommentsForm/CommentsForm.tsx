import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchALlCurrentNewsItemComments, postComment } from '../../features/Comments/commentsThunk';
import { ICommentFormState } from '../../types';
import { useParams } from 'react-router-dom';

const initialState: ICommentFormState = {
  author: '',
  text: '',
};

const CommentsForm = () => {
  const dispatch = useAppDispatch();
  const { postCommentLoading } = useAppSelector(state => state.comments);

  const { id } = useParams() as { id: string };

  const [state, setState] = useState<ICommentFormState>(initialState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(postComment({ state, id_news: id }));
    setState(initialState);
    await dispatch(fetchALlCurrentNewsItemComments(id));
  };

  return (
    <Box component="form"
         onSubmit={sendData}
    >
      <Typography variant="h3" margin="30px 0">
        Add comment
      </Typography>

      <Box component="div"
           display="flex"
           flexDirection="column"
           gap={2}
      >
        <TextField
          required
          label="Name"
          name="author"
          value={state.author}
          onChange={changeValue}
        />

        <TextField
          required
          label="Comment"
          name="text"
          value={state.text}
          onChange={changeValue}
        />

        <Button variant="contained"
                sx={{ width: 100 }}
                type="submit"
                disabled={postCommentLoading}
        >
          Add
          {
            postCommentLoading ?
              <Box sx={{ display: 'flex', marginLeft: 1 }}>
                <CircularProgress size={20} />
              </Box> : null
          }
        </Button>
      </Box>
    </Box>
  );
};

export default CommentsForm;