import React from 'react';
import styled from 'styled-components';

import CurrentRound from './CurrentRound';
import CurrentTurn from './CurrentTurn';

const SectionWrap = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: ${space.md}
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;
});

const TurnTracker = () => (
  <SectionWrap>
    <CurrentRound />
    <CurrentTurn />
  </SectionWrap>
);

export default TurnTracker;
