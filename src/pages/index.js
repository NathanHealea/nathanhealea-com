import React from 'react';
import { graphql } from 'gatsby';
import { HeroSection, AboutSection } from '@components/Landing';

export default ({ data }) => {
  return (
    <>
      <HeroSection {...data.hero} />
      <AboutSection {...data.about} />
    </>
  );
};

export const pageQuery = graphql`
  {
    hero: mdx(fileAbsolutePath: { regex: "/hero/" }) {
      body
      frontmatter {
        title
      }
    }
    about: mdx(fileAbsolutePath: { regex: "/about/" }) {
      body
      frontmatter {
        title
        avatar
      }
    }
  }
`;
