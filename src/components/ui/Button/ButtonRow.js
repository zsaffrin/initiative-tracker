import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div(({ items, theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: repeat(${items}, auto);
    align-items: center;
    justify-content: center;
    padding: ${space.lg};
  `;
});

const ButtonRow = ({ children }) => <StyledRow items={children.length}>{children}</StyledRow>;
ButtonRow.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};
ButtonRow.defaultProps = { children: [] };

export default ButtonRow;
