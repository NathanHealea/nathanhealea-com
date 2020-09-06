import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid } from '@material-ui/core';
import { Section, Title, Image } from '@components';

export default ({ body, frontmatter: { title, avatar } }) => {
  return (
    <Section id='about'>
      <Title>{title}</Title>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <MDXRenderer>{body}</MDXRenderer>
        </Grid>
        <Grid
          item
          container
          spacing={0}
          alignItems='center'
          justify='center'
          md={4}
        >
          <Image src={avatar} height='320px' width='320px' />
        </Grid>
      </Grid>
    </Section>
  );
};
