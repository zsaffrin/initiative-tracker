import React from 'react';
import styled from 'styled-components';

import { useTurnContext } from '../../../hooks';

const Wrapper = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    justify-items: center;
  `;
});
const Label = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
`;
const Score = styled.div`
    font-size: 2em;
    font-weight: bolder;
`;

const CurrentRound = () => {
  const { round } = useTurnContext();

  return (
    <Wrapper>
      <Label>Round</Label>
      <Score>
        {round}
      </Score>
    </Wrapper>
  );
};

export default CurrentRound;
