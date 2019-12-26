import React from 'react';

import { useParticipantContext } from '../../../hooks';
import TurnTracker from './TurnTracker';
import ParticipantList from './ParticipantList';

const Tracker = () => {
  const { participants } = useParticipantContext();

  return (
    <div>
      <TurnTracker />
      <ParticipantList items={participants} />
    </div>
  );
};

export default Tracker;
