import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import components from './components';

export default ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
