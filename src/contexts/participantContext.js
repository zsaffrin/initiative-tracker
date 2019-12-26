import React, { createContext, useEffect, useState } from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';

import { generateId, refreshParticipantOrder, sortParticipants } from '../utils';

const ParticipantContext = createContext();

const ParticipantProvider = ({ children }) => {
  const [participants, setParticipants] = useState(
    JSON.parse(window.localStorage.getItem('participants')) || [],
  );

  useEffect(() => {
    window.localStorage.setItem('participants', JSON.stringify(participants));
  }, [participants]);

  const addParticipant = () => {
    setParticipants([...participants, {
      id: generateId(7),
      name: '',
      roll: 0,
    }]);
  };

  const updateParticipant = (participant) => {
    const updatedParticipants = participants.reduce((acc, p) => (
      p.id === participant.id ? [...acc, participant] : [...acc, p]
    ), []);
    setParticipants(updatedParticipants);
  };

  const deleteParticipant = (participant) => {
    const updatedParticipants = participants.filter((p) => p.id !== participant.id);
    setParticipants(updatedParticipants);
  };

  const sortAllParticipants = async (sortKey) => {
    const sortedParticipants = sortParticipants(participants, sortKey);
    setParticipants(sortedParticipants);
    return sortedParticipants;
  };

  const reorderParticipants = (sortKey) => {
    const sortedParticipants = sortParticipants(participants, sortKey);
    const orderedParticipants = refreshParticipantOrder(sortedParticipants);
    setParticipants(orderedParticipants);
  };

  const setNewParticipantOrder = (participant, newOrder) => setParticipants(participants
    .reduce((acc, p) => {
      let orderToSet = p.order;
      if (p.order === newOrder) {
        orderToSet = participant.order;
      }
      if (p.id === participant.id) {
        orderToSet = newOrder;
      }

      return [
        ...acc,
        { ...p, order: orderToSet },
      ];
    }, []));

  return (
    <ParticipantContext.Provider value={{
      participants,
      addParticipant,
      updateParticipant,
      deleteParticipant,
      sortAllParticipants,
      reorderParticipants,
      setNewParticipantOrder,
    }}
    >
      {children}
    </ParticipantContext.Provider>
  );
};
ParticipantProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};
ParticipantProvider.defaultProps = {
  children: [],
};

export { ParticipantContext, ParticipantProvider };
