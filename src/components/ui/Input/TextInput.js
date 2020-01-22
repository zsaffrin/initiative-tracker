import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input(({ theme }) => {
  const { inputs, space } = theme;
  return `
    border: 1px solid ${inputs.borderColor};
    border-radius: 4px;
    padding: ${space.md};
    font-size: 0.9em;
    width: 100%;
  `;
});

const TextInput = (props) => (
  <StyledInput type="text" {...props} />
);

export default TextInput;
