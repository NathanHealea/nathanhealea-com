import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MdxThemeProvider from '@providers/MdxThemeProvider';

import { MainTheme } from './src/themes';

export default ({ element }) => (
  <ThemeProvider theme={MainTheme}>
    <CssBaseline />
    <MdxThemeProvider>{element}</MdxThemeProvider>
  </ThemeProvider>
);
