import React, { createContext } from 'react';
import {
  arrayOf, oneOfType, node, shape,
} from 'prop-types';

const ListContext = createContext();

const ListProvider = ({ list, children }) => (
  <ListContext.Provider value={list}>
    {children}
  </ListContext.Provider>
);
ListProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  list: shape({}),
};
ListProvider.defaultProps = {
  children: [],
  list: {},
};

export { ListContext, ListProvider };
