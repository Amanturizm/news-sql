import React from 'react';
import { IComment } from '../../types';
import { Box, Button, Typography } from '@mui/material';

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
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
      >
        Delete
      </Button>
    </Box>
  );
};

export default Comment;