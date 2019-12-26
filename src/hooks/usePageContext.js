import { useContext } from 'react';

import { PageContext } from '../contexts';

export function usePageContext() {
  const { activePage, changePage, pageArgs } = useContext(PageContext);

  return { activePage, changePage, pageArgs };
}
