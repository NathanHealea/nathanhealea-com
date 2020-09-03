import React from 'react';
import { graphql } from 'gatsby';
import { HeroSection, AboutSection, ProjectSection } from '@components/Landing';

export default ({ data }) => {
  return (
    <>
      <HeroSection {...data.hero} />
      <AboutSection {...data.about} />
      <ProjectSection />
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
