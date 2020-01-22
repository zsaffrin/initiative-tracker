import { useContext } from 'react';

import { ParticipantContext } from '../contexts';

export function useParticipantContext() {
  const {
    participants,
    addParticipant,
    updateParticipant,
    deleteParticipant,
    sortAllParticipants,
    reorderParticipants,
    setNewParticipantOrder,
    updateParticipantOrder,
  } = useContext(ParticipantContext);

  return {
    participants,
    addParticipant,
    updateParticipant,
    deleteParticipant,
    sortParticipants: sortAllParticipants,
    reorderParticipants,
    setNewParticipantOrder,
    updateParticipantOrder,
  };
}