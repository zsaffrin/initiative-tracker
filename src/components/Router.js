import React from 'react';

import { usePageContext } from '../hooks';
import { ManageParticipants, Tracker } from './Pages';

const Router = () => {
  const { activePage } = usePageContext();

  switch (activePage) {
    case 'manageParticipants':
      return <ManageParticipants />;

    default:
      return <Tracker />;
  }
};

export default Router;
