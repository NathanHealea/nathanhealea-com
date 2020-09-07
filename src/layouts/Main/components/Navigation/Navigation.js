import React, { Fragment, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useScrollYPosition } from 'react-use-scroll-position';

import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Hidden,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Logo } from '@components';

import config from '@configs';

// --- Utility Functions --- //
/**
 * Generates links using given React component and applying properties.
 * @param {React Component Function} Component used to render navigation link with
 * @param {Object} props to apply to passed component
 */
const generateNavigationLink = (Component, props = {}) => {
  return config.links.map((link) => (
    <Component
      component={AnchorLink}
      {...props}
      to={`${link.path}${link.anchor}`}
      key={uuid()}
    >
      {link.title}
    </Component>
  ));
};

/**
 * Displays logo in navigation
 */
const NavigationLogo = () => {
  return (
    <Box flexGrow={1}>
      <Logo />
    </Box>
  );
};

/**
 * Component to display links on desk (window size)
 */
const DesktopLinks = () => {
  return (
    <Hidden mdDown>
      {generateNavigationLink(Button, { color: 'inherit' })}
    </Hidden>
  );
};

/**
 * Component to display links on mobile (window size)
 */
const MobileLinks = () => {
  const [isOpen, setOpen] = useState(false);

  // Reference: https://github.com/brohlson/chaseohlson/blob/7457857e3bbc33aafb00a24cc21e06f83c3fda65/src/components/Header.js#L200
  const scrollY = typeof window !== 'undefined' ? useScrollYPosition() : 0;

  // Close drawer on page scroll when navigation has been clicked
  useEffect(() => {
    setOpen(false);
  }, [scrollY]);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <Hidden lgUp>
      <IconButton color='inherit' onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        style={{ width: 'auto' }}
        anchor='right'
        open={isOpen}
        onClose={closeDrawer}
        onKeyDown={closeDrawer}
      >
        <List style={{ width: '240px' }}>
          {config.links.map((link) => (
            <ListItem
              component={AnchorLink}
              button
              to={`${link.path}${link.anchor}`}
              key={uuid()}
            >
              {link.title}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Hidden>
  );
};

/**
 * Component to display navigation on site.
 */
const Navigation = () => {
  // const styles = useNavigationStyles();
  return (
    <Fragment>
      <AppBar position='fixed' color='secondary'>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <NavigationLogo />
            <DesktopLinks />
            <MobileLinks />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar component={Box} />
    </Fragment>
  );
};

export default Navigation;
