import React from 'react';

import { styled } from '@material-ui/core/styles';

const Icon = styled(({ height, ...otherProps }) => <div {...otherProps} />)({
  color: 'inherit',

  height: (props) => props.height || '48px',
  width: 'auto',
  '& > *': {
    height: (props) => props.height || '48px',
    width: 'auto',
  },
});

export default () => (
  <Icon>
    <svg viewBox='0 0 66 52.905' width='66pt' height='52.905pt'>
      <defs>
        <clipPath id='_clipPath_62pNjWZuRBTBAKLcJYyXG0QuiqY7eoJV'>
          <rect width='66' height='52.905' />
        </clipPath>
      </defs>
      <g clipPath='url(#_clipPath_62pNjWZuRBTBAKLcJYyXG0QuiqY7eoJV)'>
        <path
          d=' M 11.63 45.574 L 19.217 7.402 Q 11.828 48.973 19.217 51.739 Q 26.607 54.505 31.783 11.195 Q 32.771 3.924 30.835 1 M 43.164 4.794 L 36.051 48.42 Q 35.933 51.502 37.474 49.605 M 46.958 11.907 Q 50.238 0.605 48.617 11.907 Q 46.997 23.208 41.742 46.523 Q 40.991 49.21 40.319 46.523 C 39.647 43.836 31.033 25.816 14.475 23.524 C -2.082 21.232 -4.848 28.345 14.475 28.266 Q 33.799 28.187 65 27.081'
          fillRule='evenodd'
          fill='none'
          vectorEffect='non-scaling-stroke'
          strokeWidth='2'
          stroke='rgb(36,242,194)'
          strokeLinejoin='round'
          strokeLinecap='round'
          strokeMiterlimit='3'
        />
      </g>
    </svg>
  </Icon>
);
