import React from 'react';
import { shape } from 'prop-types';

const ParticipantListItem = ({ item }) => {
  const { name } = item;

  return (
    <div>
      {name}
    </div>
  );
};
ParticipantListItem.propTypes = {
  item: shape({}),
};
ParticipantListItem.defaultProps = {
  item: {},
};

export default ParticipantListItem;
