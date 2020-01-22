import { useContext } from 'react';

import { ListContext } from '../contexts';

export function useListContext() {
  const list = useContext(ListContext);

  return list;
}
