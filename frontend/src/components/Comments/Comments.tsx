import React from 'react';
import { IComment } from '../../types';
import { Box, Typography } from '@mui/material';
import Comment from '../Comment/Comment';
import CommentsForm from '../CommentsForm/CommentsForm';

interface Props {
  comments: IComment[];
}

const Comments: React.FC<Props> = ({ comments }) => {

  return (
    <Box component="div">
      <Typography variant="h3">
        Comments
      </Typography>

      <Box component="div"
           display="flex"
           flexDirection="column"
           gap={2}
      >
        {
          comments.map(comment => <Comment comment={comment} />)
        }
      </Box>

      <CommentsForm />
    </Box>
  );
};

export default Comments;