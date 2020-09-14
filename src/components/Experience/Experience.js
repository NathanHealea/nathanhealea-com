import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Box, Grid, Typography, withStyles } from '@material-ui/core';

import { Image } from '@components';

const GridImage = withStyles((theme) => ({
  root: {
    order: 2,
    '& ::nth-child(even)': {
      order: 1,
    },
    [theme.breakpoints.down('sm')]: { order: 1 },
  },
}))(Grid);

const GridContent = withStyles((theme) => ({
  root: {
    order: 1,
    [theme.breakpoints.down('sm')]: { order: 2 },
  },
}))(Grid);

const Experience = ({
  position,
  department,
  company,
  image,
  start,
  end,
  isCurrent,
  body,
  excerpt,
}) => {
  return (
    <Box my={'16px'}>
      <Grid container spacing={4}>
        <GridContent
          item
          // container
          // spacing={0}
          // alignItems='center'
          // justify='center'
          md={8}
        >
          <Box width='100%'>
            <Typography variant='subtitle2' color='inherit'>
              {department ? `${department} - ${company}` : `${company}`}
            </Typography>
            <Typography variant='h6' color='inherit'>
              {position}
            </Typography>
            <Typography variant='overline' color='primary' gutterBottom>
              {start} - {isCurrent ? 'Present' : end}
            </Typography>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
        </GridContent>
        <GridImage
          item
          container
          spacing={0}
          alignItems='center'
          justify='center'
          md={4}
        >
          <Image src={image.publicURL} height='200px' width='200px' />
        </GridImage>
      </Grid>
    </Box>
  );
};

export default Experience;
