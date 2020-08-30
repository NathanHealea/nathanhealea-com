import React from 'react';
import { graphql } from 'gatsby';
import { HeroSection } from '@components/Landing';

export default ({ data }) => {
  return (
    <>
      <HeroSection {...data.hero} />
    </>
  );
};

export const pageQuery = graphql`
  {
    hero: mdx(fileAbsolutePath: { regex: "/hero/" }) {
      body
    }
  }
`;
