import React from 'react';
import color from 'tinycolor2';

import { styled, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const Image = withStyles((theme) => ({
  root: (props) => ({
    position: 'relative',
    height: props.height,
    width: props.width,
    marginRight: '32px',
    marginBottom: '32px',
    borderRadius: '8px',
    backgroundSize: 'cover',
    backgroundImage: `url(${props.src})`,
    backgroundColor: color(theme.palette.primary.main)
      .setAlpha(50)
      .toRgbString(),
    backgroundBlendMode: 'luminosity, normal',
    transformStyle: 'preserve-3d',
    transition: theme.transitions.create('All', {
      easing: theme.transitions.easing.easeOut,
      duration: 500,
    }),
    '&:hover': {
      backgroundColor: 'transparent',
      backgroundBlendMode: 'normal',
      '& > div': {
        top: 16,
        left: 16,
      },
    },
    '& > div': {
      position: 'relative',
      top: 32,
      left: 32,
      height: '100%',
      width: '100%',
      borderRadius: '8px',
      border: `2px solid ${theme.palette.primary.main}`,
      transform: 'translateZ(-16px)',
      transition: theme.transitions.create('All', {
        easing: theme.transitions.easing.easeOut,
        duration: 500,
      }),
    },
  }),
}))(Box);

Image.defaultProps = {
  height: '100%',
  width: '100%',
};

const Boarder = styled('div')(({ theme }) => ({}));

export default (props) => {
  return (
    <Image {...props}>
      <Boarder />
    </Image>
  );
};
