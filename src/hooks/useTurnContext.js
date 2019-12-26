import { useContext } from 'react';

import { TurnContext } from '../contexts';

export function useTurnContext() {
  const {
    round,
    setRound,
    nextRound,
    prevRound,
    turn,
    setTurn,
    nextTurn,
    prevTurn,
  } = useContext(TurnContext);

  return {
    round,
    setRound,
    nextRound,
    prevRound,
    turn,
    setTurn,
    nextTurn,
    prevTurn,
  };
}
