import React from 'react';
import { oneOfType, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ name, ...props }) => <FontAwesomeIcon icon={name} {...props} />;
Icon.propTypes = {
  name: oneOfType([shape({}), string]),
};
Icon.defaultProps = { name: '' };

export default Icon;
