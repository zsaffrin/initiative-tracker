import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';

import { ParticipantContext } from './participantContext';

const TurnContext = createContext();

const TurnProvider = ({ children }) => {
  const { participants } = useContext(ParticipantContext);
  const [turn, setTurn] = useState(JSON.parse(window.localStorage.getItem('currentTurn')) || 1);
  const [round, setRound] = useState(JSON.parse(window.localStorage.getItem('currentRound')) || 1);

  useEffect(() => {
    window.localStorage.setItem('currentTurn', JSON.stringify(turn));
  }, [turn]);

  useEffect(() => {
    window.localStorage.setItem('currentRound', JSON.stringify(round));
  }, [round]);

  const nextTurn = () => {
    if (turn >= participants.length) {
      setRound(round + 1);
      setTurn(1);
    } else {
      setTurn(turn + 1);
    }
  };
  const prevTurn = () => {
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
  const nextRound = () => {
    setRound(round + 1);
  };
  const prevRound = () => {
    setRound(round <= 1 ? 1 : round - 1);
  };

  return (
    <TurnContext.Provider value={{
      round,
      setRound,
      nextRound,
      prevRound,
      turn,
      setTurn,
      nextTurn,
      prevTurn,
    }}
    >
      {children}
    </TurnContext.Provider>
  );
};
TurnProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};
TurnProvider.defaultProps = {
  children: [],
};

export { TurnContext, TurnProvider };
