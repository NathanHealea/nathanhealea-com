import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import uuid from 'uuid/v4';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  withStyles,
} from '@material-ui/core';

/* --- Icons ---  */
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const ArchivedCard = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    height: '100%',
    width: '100%',
    display: 'flex',
    boxShadow: theme.shadows[4],
  },
}))(Card);

const TechnologyList = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}))(List);

const TechnologyListItem = withStyles((theme) => ({
  root: {
    ...theme.typography.overline,
    width: 'auto',
  },
}))(ListItem);

const ArchiveProject = ({
  title,
  description,
  technologies,
  github,
  external,
  hidden,
}) => (
  <Grid
    item
    container
    spacing={0}
    justify='center'
    alignItems='center'
    lg={4}
    md={6}
    xs={12}
    style={{ display: hidden ? 'none' : '' }}
  >
    <ArchivedCard>
      <CardContent>
        <CardHeader
          avatar={
            <FolderOpenIcon style={{ fontSize: '64px' }} color='primary' />
          }
          action={
            <>
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
            </>
          }
        />
        <Typography variant='h6' color='inherit' gutterBottom>
          {title}
        </Typography>

        <MDXRenderer>{description}</MDXRenderer>
        <Typography variant='overline' color='primary' gutterBottom>
          Technology
        </Typography>
        <TechnologyList disablePadding dense>
          {technologies.map((technology) => (
            <TechnologyListItem key={uuid()}>{technology}</TechnologyListItem>
          ))}
        </TechnologyList>
      </CardContent>
    </ArchivedCard>
  </Grid>
);

export default ArchiveProject;
