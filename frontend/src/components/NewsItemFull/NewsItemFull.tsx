import React from 'react';
import { INewsItem } from '../../types';
import { Box, Typography } from '@mui/material';
import { apiUrl } from '../../constants';

interface Props {
  fullItem: INewsItem;
}

const NewsItemFull: React.FC<Props> = ({ fullItem }) => {
  const imageUrl = apiUrl + '/' + fullItem.image;

  return (
    <Box component="div"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
    >
      <Box component="div">
        <Typography variant="h2">
          {fullItem.title}
        </Typography>
        <Typography variant="h5">
          {fullItem.datetime}
        </Typography>
        <Box component="p" fontSize={26}>
          {fullItem.content}
        </Box>
      </Box>

      <img src={imageUrl} alt="img" />
    </Box>
  );
};

export default NewsItemFull;