import React from 'react';
import { string, func } from 'prop-types';
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

const TextInput = ({ id, value, onChange }) => (
  <StyledInput type="text" id={id} value={value} onChange={onChange} />
);
TextInput.propTypes = {
  id: string,
  value: string,
  onChange: func,
};
TextInput.defaultProps = {
  id: '',
  value: '',
  onChange: () => {},
};

export default TextInput;
