import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchAll } from './newsThunk';
import NewsItem from '../../components/NewsItem/NewsItem';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Preloader from '../../components/UI/Preloader/Preloader';

const News = () => {
  const dispatch = useAppDispatch();
  const { news, newsLoading } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <Box component="div"
           display="flex"
           justifyContent="space-between"
           alignItems="center"
           margin="20px 0"
      >
        <Typography variant="h2">
          Posts
        </Typography>
          <Link to="new-post">
            <Button variant="outlined" sx={{ height: 40 }}>
              Add new post
            </Button>
          </Link>
      </Box>

      <Box component="div"
           display="flex"
           flexDirection="column"
           gap={2}
      >
        {
          newsLoading ? <Preloader /> :
          news.map(newsItem => <NewsItem newsItem={newsItem} key={newsItem.id} />)
        }
      </Box>
    </div>
  );
};

export default News;