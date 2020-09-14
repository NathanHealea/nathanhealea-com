import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box } from '@material-ui/core';

import { Section, Title, SocialMediaBar, DownloadResume } from '@components';

/**
 * TODO: Implement resume download
 */
export default ({ body, frontmatter: { title } }) => {
  return (
    <Section id='hero'>
      <Title>{title}</Title>
      <MDXRenderer>{body}</MDXRenderer>
      <Box my={2}>
        <DownloadResume />
      </Box>
      <Box>
        <SocialMediaBar />
      </Box>
    </Section>
  );
};
