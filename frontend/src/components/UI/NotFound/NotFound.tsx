import React from 'react';
import { Typography } from '@mui/material';

const NotFound = () => (
  <Typography
    variant="h1"
    position="absolute"
    sx={{ top: '50%', left: '50%', translate: "-50%" }}
  >
    Not Found!
  </Typography>
);

export default NotFound;