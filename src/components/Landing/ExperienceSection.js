import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid } from '@material-ui/core';
import { Section, Title, Experience } from '@components';

export default ({ experiences }) => {
  const relativeExperiences = experiences.nodes.slice(0, 3);
  return (
    <Section id='experiences'>
      <Title>Experiences</Title>
      {relativeExperiences.map(({ id, frontmatter, body }) => (
        <Experience key={id} {...frontmatter} body={body} />
      ))}
    </Section>
  );
};
