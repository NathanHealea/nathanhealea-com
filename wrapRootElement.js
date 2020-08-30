import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MainTheme } from './src/themes';

export default ({ element }) => (
  <ThemeProvider theme={MainTheme}>
    <CssBaseline />

    {element}
  </ThemeProvider>
);
