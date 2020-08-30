import React from 'react';

import { MainLayout } from '@layouts/Main';

export default ({ element, props }) => (
  <MainLayout {...props}>{element}</MainLayout>
);
