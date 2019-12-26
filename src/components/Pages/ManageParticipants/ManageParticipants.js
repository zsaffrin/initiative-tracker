import React from 'react';

import { useParticipantContext, usePageContext } from '../../../hooks';
import { ButtonRow, Button, H } from '../../ui';
import ManageRound from './ManageRound';
import ParticipantList from './ParticipantList';

const ManageParticipants = () => {
  const { changePage } = usePageContext();
  const { participants, addParticipant, reorderParticipants } = useParticipantContext();

  const sortByRoll = () => {
    reorderParticipants('roll');
  };

  const onDone = () => {
    changePage();
  };

  const orderedParticipants = participants.sort((a, b) => {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
    return 0;
  });

  return (
    <div>
      <ManageRound />
      <H l={2} centered compact>Manage Participants</H>
      <ButtonRow>
        <Button primary small onClick={addParticipant}>
          Add New
        </Button>
        <Button small onClick={sortByRoll}>
          Sort By Roll
        </Button>
      </ButtonRow>
      <ParticipantList items={orderedParticipants} />
      <ButtonRow>
        <Button primary onClick={onDone}>
          Done
        </Button>
      </ButtonRow>
    </div>
  );
};

export default ManageParticipants;
