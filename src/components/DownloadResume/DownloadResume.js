import React from 'react';

import { Button } from '@material-ui/core';

import resume from './nathan_healea_resume.pdf';

export default () => (
  <Button
    component='a'
    variant='outlined'
    color='primary'
    size='large'
    href={resume}
    target='_blank'
  >
    Download Resume
  </Button>
);
