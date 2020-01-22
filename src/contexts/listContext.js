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
    const {
      created, id, participants, turn,
    } = list;
    updateList(id, {
      created,
      modified: new Date(),
      participants,
      turn,
      round: newRound,
    });
  };

  const setTurn = (newTurn) => {
    const {
      created, id, participants, round,
    } = list;
    updateList(id, {
      created,
      modified: new Date(),
      participants,
      round,
      turn: newTurn,
    });
  };

  const setRoundAndTurn = (newRound, newTurn) => {
    const {
      created, id, participants,
    } = list;
    updateList(id, {
      created,
      modified: new Date(),
      participants,
      round: newRound,
      turn: newTurn,
    });
  };

  const decrementTurn = () => {
    const { participants, round, turn } = list;

    if (turn <= 1) {
      if (round > 1) {
        setRoundAndTurn(round - 1, participants.length);
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
      setRoundAndTurn(round + 1, 1);
    }
  };

  const setParticipants = (newParticipants) => {
    const {
      created, id, round, turn,
    } = list;
    updateList(id, {
      created,
      modified: new Date(),
      round,
      turn,
      participants: newParticipants,
    });
  };

  const sortParticipantsByKey = (sortKey) => {
    const {
      created, id, participants, round, turn,
    } = list;
    const sortedParticipants = sortParticipants(participants, sortKey);
    updateList(id, {
      created,
      modified: new Date(),
      round,
      turn,
      participants: sortedParticipants,
    });
  };

  const addParticipant = () => {
    const { participants } = list;
    const newParticipants = [
      ...participants,
      {
        id: generateId(10),
        name: '',
        roll: 0,
      },
    ];
    setParticipants(newParticipants);
  };

  const updateParticipant = (participant) => {
    const {
      created, id, participants, round, turn,
    } = list;
    const updatedParticipants = participants.reduce((acc, p) => (p.id === participant.id
      ? [...acc, participant]
      : [...acc, p]), []);
    updateList(id, {
      created,
      modified: new Date(),
      round,
      turn,
      participants: updatedParticipants,
    });
  };

  const deleteParticipant = (participant) => {
    const {
      created, id, participants, round, turn,
    } = list;
    const updatedParticipants = participants.filter((p) => p.id !== participant.id);
    updateList(id, {
      created,
      modified: new Date(),
      round,
      turn,
      participants: updatedParticipants,
    });
  };

  return (
    <ListContext.Provider value={{
      list,
      updateList,
      setRound,
      setTurn,
      setRoundAndTurn,
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
