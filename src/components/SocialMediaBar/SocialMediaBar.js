import React from 'react';
import uuid from 'uuid/v4';
import { Button } from '@material-ui/core';

import { FormattedIcon } from '@components';

import config from '@configs';

export default () =>
  config.socialMedia.map((socialMedia) => (
    <Button key={uuid()} component='a' href={socialMedia.url} target='_blank'>
      <FormattedIcon icon={socialMedia.icon} />
    </Button>
  ));
