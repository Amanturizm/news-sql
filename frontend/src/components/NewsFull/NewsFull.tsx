import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchOne } from '../../features/News/newsThunk';
import { useParams } from 'react-router-dom';
import NewsItemFull from '../NewsItemFull/NewsItemFull';
import { fetchALlCurrentNewsItemComments } from '../../features/Comments/commentsThunk';
import Comments from '../Comments/Comments';
import { Box } from '@mui/material';

const NewsFull = () => {
  const { id } = useParams() as { id: string };

  const dispatch = useAppDispatch();
  const { newsItemFull } = useAppSelector(state => state.news);
  const { comments } = useAppSelector(state => state.comments);

  useEffect(() => {
    if (id) {
      dispatch(fetchOne(id));
      dispatch(fetchALlCurrentNewsItemComments(id));
    }
  }, [id, dispatch]);

  return (
    <Box component="div"
         margin="30px"
    >
      {
        newsItemFull ? <NewsItemFull fullItem={newsItemFull} /> : null
      }

      {
        comments ? <Comments comments={comments} /> : null
      }
    </Box>
  );
};

export default NewsFull;