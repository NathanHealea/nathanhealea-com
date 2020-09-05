import React from 'react';

import Typography from '@material-ui/core/Typography';

export default ({ children }) => (
  <Typography variant='h4' color='primary' gutterBottom>
    {children}
  </Typography>
);
