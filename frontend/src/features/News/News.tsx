import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchAll } from './newsThunk';
import NewsItem from '../../components/NewsItem/NewsItem';
import { Box, Button, Typography } from '@mui/material';

const News = () => {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <Box component="div"
           display="flex"
           justifyContent="space-between"
           alignItems="center"
      >
        <Typography variant="h2">
          Posts
        </Typography>
        <Button variant="outlined"
                sx={{ height: 40 }}
        >
          Add new post
        </Button>
      </Box>

      <Box component="div"
           display="flex"
           flexDirection="column"
           gap={2}
      >
        {news.map(newsItem => <NewsItem newsItem={newsItem} key={newsItem.id} />)}
      </Box>
    </div>
  );
};

export default News;