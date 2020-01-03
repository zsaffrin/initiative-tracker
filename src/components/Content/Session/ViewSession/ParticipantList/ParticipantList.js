import React from 'react';

import { useListContext } from '../../../../../hooks';

import ParticipantListItem from './ParticipantListItem';

const ParticipantList = () => {
  const { list } = useListContext();
  const { participants } = list;

  return (
    <div>
      {participants.length > 0
        ? participants.map((p) => <ParticipantListItem item={p} key={p.id} />)
        : 'No participants'}
    </div>
  );
};

export default ParticipantList;
