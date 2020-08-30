import React from 'react';
import { Navigation } from './components';

export default (props) => {
  const { children } = props;

  return (
    <>
      <Navigation />

      {children}
    </>
  );
};
