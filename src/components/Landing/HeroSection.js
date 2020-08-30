import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Section } from '@components';

import config from '@configs';
import { Button } from '@material-ui/core';

export default ({ body }) => {
  return (
    <Section>
      <MDXRenderer>{body}</MDXRenderer>
      <Button>Download Resume</Button>
    </Section>
  );
};
