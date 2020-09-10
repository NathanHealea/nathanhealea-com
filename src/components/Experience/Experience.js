import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Box, Grid, Typography } from '@material-ui/core';

const Experience = ({
  position,
  company,
  start,
  end,
  isCurrent,
  body,
  excerpt,
}) => {
  console.log(excerpt);
  return (
    <Box my={'16px'}>
      <Grid container>
        <Grid item md={2} sm={12} xs={12}></Grid>
        <Grid item md={10} sm={12} xx={12}>
          <Typography variant='subtitle2' color='inherit'>
            {company}
          </Typography>
          <Typography variant='h6' color='inherit'>
            {position}
          </Typography>
          <Typography variant='overline' color='primary' gutterBottom>
            {start} - {isCurrent ? 'Present' : end}
          </Typography>
          <MDXRenderer>{body}</MDXRenderer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
