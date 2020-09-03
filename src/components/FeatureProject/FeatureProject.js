import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  Box,
  withStyles,
} from '@material-ui/core';

/* --- Icons ---  */
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

import { Image } from '@components';

const Content = withStyles((theme) => ({
  root: {
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[16],
    padding: theme.spacing(4),
    margin: `${theme.spacing(2)}px 0px`,
    borderRadius: '8px',
    width: '100%',
  },
}))(Box);

const TechnologyList = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}))(List);

const TechnologyListItem = withStyles((theme) => ({
  root: {
    ...theme.typography.overline,
    width: 'auto',
  },
}))(ListItem);

const FeatureProject = ({
  title,
  description,
  technologies,
  github,
  external,
  image,
}) => (
  <Box my={8}>
    <Grid container spacing={4}>
      <Grid
        item
        container
        spacing={0}
        alignItems='center'
        justify='center'
        md={8}
      >
        <Box width='100%'>
          <Typography variant='overline' component='p' color='primary'>
            Featured Project
          </Typography>
          <Typography variant='h4' component='h4'>
            {title}
          </Typography>
          <Content>
            <MDXRenderer>{description}</MDXRenderer>
          </Content>
          <TechnologyList disablePadding dense>
            {technologies.map((technology) => (
              <TechnologyListItem>{technology}</TechnologyListItem>
            ))}
          </TechnologyList>
          {github ? (
            <Button component='a' target='_blank' href={github}>
              <GitHubIcon />
            </Button>
          ) : (
            ''
          )}
          {external ? (
            <Button component='a' target='_blank' href={external}>
              <LaunchIcon />
            </Button>
          ) : (
            ''
          )}
        </Box>
      </Grid>
      <Grid
        item
        container
        spacing={0}
        alignItems='center'
        justify='center'
        md={4}
      >
        <Image src={image.publicURL} height='320px' width='320px' />
      </Grid>
    </Grid>
  </Box>
);

FeatureProject.defaultProps = {
  title: 'Project Title',
  description: 'This is a default project description',
  technologies: ['tech 1', 'tech 2', 'tech 3', 'tech 4'],
  github: 'https://github.com',
  external: 'http://google.com',
  image: '',
};

export default FeatureProject;
