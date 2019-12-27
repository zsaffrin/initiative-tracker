import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.div(({ theme }) => {
  const { color, space } = theme;
  return `
    background: ${color.lightgray};
    border: 2px dashed ${color.darkgray};
    color: ${color.darkgray};
    padding: ${space.lg}
    display: grid;
    justify-items: center;
  `;
});

const Placeholder = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);
Placeholder.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};
Placeholder.defaultProps = { children: [] };

export default Placeholder;
