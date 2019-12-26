import React from 'react';
import {
  bool, func, number, oneOfType, string,
} from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input(({ centered, theme }) => {
  const { inputs, space } = theme;
  return `
    border: 1px solid ${inputs.borderColor};
    border-radius: 4px;
    padding: ${space.md};
    font-size: 0.9em;
    text-align: ${centered ? 'center' : 'left'};
    width: 100%;
    
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  `;
});

const NumberInput = ({
  centered, id, value, onChange,
}) => (
  <StyledInput type="number" id={id} value={value} onChange={onChange} centered={centered ? 1 : 0} />
);
NumberInput.propTypes = {
  centered: bool,
  id: string,
  value: oneOfType([number, string]),
  onChange: func,
};
NumberInput.defaultProps = {
  centered: false,
  id: '',
  value: undefined,
  onChange: () => {},
};

export default NumberInput;
