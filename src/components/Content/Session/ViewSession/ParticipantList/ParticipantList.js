import React from 'react';

import { useListContext } from '../../../../../hooks';

import ParticipantListItem from './ParticipantListItem';

const ParticipantList = () => {
  const { list } = useListContext();
  const { participants } = list;

  return (
    <div>
      {participants.length > 0
        ? participants.map((p, i) => <ParticipantListItem item={p} order={i + 1} key={p.id} />)
        : 'No participants'}
    </div>
  );
};

export default ParticipantList;
