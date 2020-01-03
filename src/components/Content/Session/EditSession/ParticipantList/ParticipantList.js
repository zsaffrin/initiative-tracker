import React from 'react';

import { useListContext } from '../../../../../hooks';
import { ButtonRow, Button } from '../../../../ui';
import ParticipantListItem from './ParticipantListItem';

const ParticipantList = () => {
  const { list, addParticipant } = useListContext();
  const { participants } = list;

  return (
    <div>
      <ButtonRow>
        <Button small onClick={addParticipant}>Add New</Button>
      </ButtonRow>
      <div>
        {participants.length > 0
          ? participants.map((p) => <ParticipantListItem item={p} key={p.id} />)
          : 'No participants'}
      </div>
    </div>
  );
};

export default ParticipantList;
