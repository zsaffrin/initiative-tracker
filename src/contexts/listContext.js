import React, { createContext, useContext } from 'react';
import {
  arrayOf, oneOfType, node, shape,
} from 'prop-types';

import { generateId, sortParticipants } from '../utils';
import { FirebaseContext } from './firebaseContext';

const ListContext = createContext();

const ListProvider = ({ list, children }) => {
  const firebase = useContext(FirebaseContext);

  const updateList = (listId, newData) => {
    firebase.updateDoc(`lists/${listId}`, newData);
  };

  const setRound = (newRound) => {
    const { id, ...rest } = list;
    updateList(id, {
      ...rest,
      round: newRound,
    });
  };

  const setTurn = (newTurn) => {
    const { id, round, ...rest } = list;
    updateList(id, {
      ...rest,
      turn: newTurn,
    });
  };

  const decrementTurn = () => {
    const { participants, round, turn } = list;

    if (turn <= 1) {
      if (round > 1) {
        setRound(round - 1);
        setTurn(participants.length);
      } else {
        setTurn(1);
      }
    } else {
      setTurn(turn - 1);
    }
  };

  const incrementTurn = () => {
    const { participants, round, turn } = list;

    if (turn < participants.length) {
      setTurn(turn + 1);
    } else {
      setRound(round + 1);
      setTurn(1);
    }
  };

  const setParticipants = (newParticipants) => {
    const { id, participants, ...rest } = list;
    updateList(id, {
      ...rest,
      participants: newParticipants,
    });
  };

  const sortParticipantsByKey = (sortKey) => {
    const { id, participants, ...rest } = list;
    const sortedParticipants = sortParticipants(participants, sortKey);
    updateList(id, {
      ...rest,
      participants: sortedParticipants,
    });
  };

  const addParticipant = () => {
    const { id, participants, ...rest } = list;
    updateList(id, {
      ...rest,
      participants: [
        ...participants,
        {
          id: generateId(10),
          name: '',
          roll: 0,
        },
      ],
    });
  };

  const updateParticipant = (participant) => {
    const { id, participants, ...rest } = list;
    const updatedParticipants = participants.reduce((acc, p) => (p.id === participant.id
      ? [...acc, participant]
      : [...acc, p]), []);
    updateList(id, {
      ...rest,
      participants: updatedParticipants,
    });
  };

  const deleteParticipant = (participant) => {
    const { id, participants, ...rest } = list;
    const updatedParticipants = participants.filter((p) => p.id !== participant.id);
    updateList(id, {
      ...rest,
      participants: updatedParticipants,
    });
  };

  return (
    <ListContext.Provider value={{
      list,
      updateList,
      setRound,
      setTurn,
      decrementTurn,
      incrementTurn,
      setParticipants,
      sortParticipantsByKey,
      addParticipant,
      updateParticipant,
      deleteParticipant,
    }}
    >
      {children}
    </ListContext.Provider>
  );
};
ListProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  list: shape({}),
};
ListProvider.defaultProps = {
  children: [],
  list: {},
};

export { ListContext, ListProvider };
