import React from 'react';
import color from 'tinycolor2';

import { styled } from '@material-ui/core/styles';

/**
 * TODO: Figure out how to implement animation with styled from MUI
 */
const Image = styled('div')(({ theme, src, height, width }) => ({
  position: 'relative',
  height,
  width,
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundColor: color(theme.palette.primary.main)
    .setAlpha(50)
    .toRgbString(),
  backgroundBlendMode: 'luminosity, normal',
  borderRadius: '8px',
  transformStyle: 'preserve-3d',
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
    height: '100%',
    width: '100%',
    borderRadius: '8px',
    border: `2px solid ${theme.palette.primary.main}`,
    transform: 'translateZ(-16px)',
  },
}));

Image.defaultProps = {
  height: '100%',
  width: '100%',
};

const Boarder = styled('div')(({ theme }) => ({
  position: 'relative',
  top: 32,
  left: 32,
  height: '100%',
  width: '100%',
  borderRadius: '8px',
  border: `2px solid ${theme.palette.primary.main}`,
  transform: 'translateZ(-16px)',
}));

export default (props) => {
  return (
    <Image {...props}>
      {/* <Color hide={hover} />
      <Saturation hide={hover} /> */}
      <Boarder />
    </Image>
  );
};
