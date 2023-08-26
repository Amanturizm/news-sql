import React from 'react';
import { AppBar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <AppBar sx={{ padding: 2, paddingLeft: 5 }}>
      <Typography variant="h4" component="div">
        <Link to="/news" style={{ textDecoration: 'none', color: 'white' }}>
          News
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Toolbar;