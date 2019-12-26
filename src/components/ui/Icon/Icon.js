import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ name, ...props }) => <FontAwesomeIcon icon={name} {...props} />;
Icon.propTypes = {
  name: string,
};
Icon.defaultProps = { name: '' };

export default Icon;
