import React from 'react';
import PropTypes from 'prop-types';

import { Box, Container } from '@material-ui/core';

const Section = ({ children, section, content, ...props }) => (
  <Box component='section' {...section} {...props}>
    <Container maxWidth={'lg'} {...content}>
      {children}
    </Container>
  </Box>
);

Section.propTypes = {
  section: PropTypes.shape({
    padding: PropTypes.number,
  }),
  content: PropTypes.shape({}),
};

Section.defaultProps = {
  section: {
    py: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Section;
