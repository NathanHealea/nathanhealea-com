import React from 'react';
import uuid from 'uuid/v4';
import {
  Typography,
  List,
  // ListItem,
  Box,
  Divider,
  Link,
} from '@material-ui/core';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { ListItem } from './Overrides';

const configuration = {
  gutterBottom: true,
};

export default {
  h1: ({ children }) => (
    <Typography variant='h1' component='h1' {...configuration}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant='h2' component='h2' {...configuration}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant='h3' component='h3' {...configuration}>
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography variant='h4' component='h4' {...configuration}>
      {children}
    </Typography>
  ),
  h5: ({ children }) => (
    <Typography variant='h5' component='h5' {...configuration}>
      {children}
    </Typography>
  ),
  h6: ({ children }) => (
    <Typography variant='h6' component='h6' {...configuration}>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant='body1' component='p' {...configuration}>
      {children}
    </Typography>
  ),
  ul: ({ children }) => (
    <List>
      {Array.isArray(children) ? (
        children.map(({ props: { children }, ...rest }) => (
          <ListItem key={uuid()}>{children}</ListItem>
        ))
      ) : (
        <ListItem key={uuid()}>{children}</ListItem>
      )}
    </List>
  ),
  ol: ({ children }) => (
    <List>
      {Array.isArray(children) ? (
        children.map(({ props: { children }, ...rest }, index) => (
          <ListItem key={uuid()}>
            <Box mr={2}>{index + 1}.</Box>
            {children}
          </ListItem>
        ))
      ) : (
        <ListItem key={uuid()}>
          <Box mr={2}>1.</Box>
          {children.children}
        </ListItem>
      )}
    </List>
  ),
  hr: ({ children }) => (
    <Box mb={2}>
      <Divider />
    </Box>
  ),
  em: ({ children }) => (
    <Typography variant='overline' component='span' color='primary'>
      {children}
    </Typography>
  ),
  a: ({ children, href }) => <Link to={href}>{children}</Link>,
};
