import React from 'react';
import { string } from 'prop-types';

import NumberInput from './NumberInput';
import TextInput from './TextInput';

const Input = (props) => {
  const { type } = props;

  if (type === 'number') {
    return <NumberInput {...props} />;
  }
  return <TextInput {...props} />;
};
Input.propTypes = {
  type: string,
};
Input.defaultProps = {
  type: '',
};

export default Input;
