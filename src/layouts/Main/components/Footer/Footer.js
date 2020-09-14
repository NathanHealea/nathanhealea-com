import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import uuid from 'uuid/v4';
import {
  Button,
  Grid as MuiGrid,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Section, FormattedIcon } from '@components';
import config from '@configs';

const Grid = withStyles((theme) => ({
  root: {
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: { textAlign: 'center' },
  },
}))(MuiGrid);

const GridRight = withStyles((theme) => ({
  root: {
    justifyContent: 'space-evenly',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: { textAlign: 'center' },
  },
}))(Grid);

export default () => (
  <Section py='16px'>
    <Grid container spacing={2}>
      <GridRight item xs={12}>
        {config.links.map((link) => (
          <Button
            component={AnchorLink}
            to={`${link.path}${link.anchor}`}
            key={uuid()}
          >
            {link.title}
          </Button>
        ))}
      </GridRight>
      <Grid item md={6} xs={12}>
        <Typography>{config.siteMetadata.title}</Typography>
        <Typography>{config.siteMetadata.subtitle}</Typography>
      </Grid>
      <GridRight item md={6} xs={12}>
        {config.socialMedia.map((socialMedia) => (
          <Button
            key={uuid()}
            component='a'
            href={socialMedia.url}
            target='_blank'
          >
            <FormattedIcon icon={socialMedia.icon} />
          </Button>
        ))}
        <Button>
          <FormattedIcon icon='mailto' />
        </Button>
      </GridRight>
      <Grid item xs={12}>
        <Typography align='center'>
          Build by me with Gatsby and Material Ui. Hosted on Google Firebase
        </Typography>
      </Grid>
    </Grid>
  </Section>
);
