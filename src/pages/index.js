import React from 'react';
import { graphql } from 'gatsby';
import {
  HeroSection,
  AboutSection,
  ProjectSection,
  ExperienceSection,
} from '@components/Landing';

export default ({ data }) => {
  return (
    <>
      <HeroSection {...data.hero} />
      <AboutSection {...data.about} />
      <ProjectSection featured={data.featured} archived={data.archived} />
      <ExperienceSection experiences={data.experience} />
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

    experience: allMdx(
      filter: { fileAbsolutePath: { regex: "/experiences/" } }
      sort: { order: DESC, fields: frontmatter___end }
    ) {
      nodes {
        id
        body
        frontmatter {
          position
          department
          company
          image {
            publicURL
          }
          start(formatString: "MMM YYYY")
          end(formatString: "MMM YYYY")
          isCurrent
        }
      }
    }
  }
`;
