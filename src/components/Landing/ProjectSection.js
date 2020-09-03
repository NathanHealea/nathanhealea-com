import React from 'react';

import { Section, Title, FeatureProject } from '@components';
import { Button, Box } from '@material-ui/core';

export default ({ featured }) => {
  return (
    <Section>
      <Title>Projects</Title>
      {featured.nodes.map(({ frontmatter, body }) => {
        return <FeatureProject {...frontmatter} {...{ description: body }} />;
      })}
    </Section>
  );
};
