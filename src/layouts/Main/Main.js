import React from 'react';
import { Navigation, Footer } from './components';

export default (props) => {
  const { children } = props;

  return (
    <>
      <Navigation />

      {children}
      <Footer />
    </>
  );
};
