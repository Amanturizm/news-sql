import React from 'react';
import { IComment } from '../../types';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { deleteComment, fetchALlCurrentNewsItemComments } from '../../features/Comments/commentsThunk';

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const { deleteCommentLoading } = useAppSelector(state => state.comments);

  const onDelete = async () => {
    await dispatch(deleteComment(comment.id));
    await dispatch(fetchALlCurrentNewsItemComments(comment.id_news));
  };

  return (
    <Box component="div"
         display="flex"
         justifyContent="space-between"
         border={2}
         padding={1}
    >
      <Box component="div"
        display="flex"
        gap={1}
      >
        <Typography variant="h5">
          {comment.author}:
        </Typography>
        <Typography variant="h5">
          {comment.text}
        </Typography>
      </Box>
      <Button variant="contained"
              onClick={onDelete}
              disabled={deleteCommentLoading === comment.id}
      >
        {
          deleteCommentLoading === comment.id ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress size={20} />
            </Box> : 'Delete'
        }
      </Button>
    </Box>
  );
};

export default Comment;