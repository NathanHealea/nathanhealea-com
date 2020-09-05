import React from 'react';
import { graphql } from 'gatsby';
import { HeroSection, AboutSection, ProjectSection } from '@components/Landing';

export default ({ data }) => {
  return (
    <>
      <HeroSection {...data.hero} />
      <AboutSection {...data.about} />
      <ProjectSection featured={data.featured} archived={data.archived} />
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
    featured: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          title
          company
          image {
            publicURL
          }
          external
          github
          technologies
          date
          featured
          showInProjects
        }
        body
      }
    }

    archived: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { eq: true } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          title
          company
          external
          github
          technologies
          date
          featured
          showInProjects
        }
        body
      }
    }
  }
`;
