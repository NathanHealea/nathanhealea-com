import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section, Title } from '@components';
import { Button, Box } from '@material-ui/core';

/**
 * TODO: Implement resume download
 */
export default ({ body, frontmatter: { title } }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <MDXRenderer>{body}</MDXRenderer>
      <Box my={2}>
        <Button variant='outlined' color='primary' size='large'>
          Download Resume
        </Button>
      </Box>
    </Section>
  );
};
