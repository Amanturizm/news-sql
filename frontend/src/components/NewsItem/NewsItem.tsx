import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { INewsItem } from '../../types';
import { apiUrl } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { deleteOne, fetchAll } from '../../features/News/newsThunk';
import dayjs from 'dayjs';

interface Props {
  newsItem: INewsItem;
}

const NewsItem: React.FC<Props> = ({ newsItem }) => {
  const dispatch = useAppDispatch();
  const { deleteLoading } = useAppSelector(state => state.news);

  const imageUrl = apiUrl + '/' + newsItem.image;

  const onDelete = async () => {
    await dispatch(deleteOne(newsItem.id));
    await dispatch(fetchAll());
  };

  return (
    <Box component="div"
         display="flex"
         justifyContent="space-between"
         alignItems="center"
         border={2}
         paddingX={3}
    >
      {
        newsItem.image ?
        <img src={imageUrl} alt="img" style={{ width: 100 }} /> : null
      }
      <Box component="div">
        <Typography variant="h3">
          {newsItem.title}
        </Typography>
        <Box component="div"
             display="flex"
             alignItems="center"
             gap={2}
        >
          <Typography variant="h6">
            {dayjs(newsItem.datetime).format('DD.MM.YYYY HH:mm:ss')}
          </Typography>
          <Link to={newsItem.id + ''} style={{ fontSize: "1.2rem" }}>Read Full Post {'>>'}</Link>
        </Box>
      </Box>
      <Button variant="contained"
              sx={{ height: 40 }}
              onClick={onDelete}
              disabled={deleteLoading === newsItem.id}
      >
        {
          deleteLoading === newsItem.id ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress size={20} />
            </Box> : 'Delete'
        }
      </Button>
    </Box>
  );
};

export default NewsItem;