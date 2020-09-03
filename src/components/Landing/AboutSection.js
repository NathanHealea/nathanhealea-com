import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { Section, Title, Image } from '@components';

export default ({ body, frontmatter: { title, avatar } }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Section>
      <Title>{title}</Title>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <MDXRenderer>{body}</MDXRenderer>
        </Grid>
        <Grid
          item
          container
          spacing={0}
          alignItems={isMobile ? 'flex-start' : 'center'}
          justify={isMobile ? 'flex-start' : 'center'}
          md={6}
        >
          <Image src={avatar} height='320px' width='320px' />
        </Grid>
      </Grid>
    </Section>
  );
};
