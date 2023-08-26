import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { INewsItem } from '../../types';
import { apiUrl } from '../../constants';

interface Props {
  newsItem: INewsItem;
}

const NewsItem: React.FC<Props> = ({ newsItem }) => {
  return (
    <Box component="div"
         display="flex"
         justifyContent="space-between"
         alignItems="center"
         border={2}
         paddingX={3}
    >
      <img src={apiUrl + newsItem.image} alt="img" />
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
            {newsItem.datetime}
          </Typography>
          <Link to={'/' + newsItem.id} style={{ fontSize: "1.2rem" }}>Read Full Post {'>>'}</Link>
        </Box>
      </Box>
      <Button variant="contained"
              sx={{ height: 40 }}
      >
        Delete
      </Button>
    </Box>
  );
};

export default NewsItem;