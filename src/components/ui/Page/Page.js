import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: ${space.md};
  `;
});

const Page = ({ children }) => <StyledPage>{children}</StyledPage>;
Page.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};
Page.defaultProps = { children: [] };

export default Page;
