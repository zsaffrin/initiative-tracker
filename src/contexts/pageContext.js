import React, { createContext, useState } from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';

const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(null);
  const [pageArgs, setPageArgs] = useState(null);

  const changePage = (newPage, args) => {
    setActivePage(newPage);
    setPageArgs(args);
  };

  return (
    <PageContext.Provider value={{ activePage, changePage, pageArgs }}>
      {children}
    </PageContext.Provider>
  );
};
PageProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};
PageProvider.defaultProps = {
  children: [],
};

export { PageContext, PageProvider };
