import React from 'react';
import styled from 'styled-components';

import { useTurnContext } from '../../../hooks';
import { Button } from '../../ui';

const Wrapper = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    justify-items: center;
  `;
});
const Actions = styled.div(({ theme }) => {
  const { space } = theme;
  return `
  display: grid;
  justify-items: center;
  grid-gap: ${space.sm};
  `;
});

const CurrentTurn = () => {
  const { prevTurn, nextTurn } = useTurnContext();

  return (
    <Wrapper>
      <Actions>
        <div>
          <Button small onClick={() => prevTurn()}>Prev Turn</Button>
        </div>
        <div>
          <Button primary onClick={() => nextTurn()}>Next Turn</Button>
        </div>
      </Actions>
    </Wrapper>
  );
};

export default CurrentTurn;
