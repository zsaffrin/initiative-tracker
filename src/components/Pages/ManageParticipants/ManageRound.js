import React from 'react';
import styled from 'styled-components';

import { useTurnContext } from '../../../hooks';
import { Button, Icon } from '../../ui';

const Wrapper = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${space.sm};
    margin: ${space.md} 0;
    padding: ${space.md};
  `;
});
const Row = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, auto);
    grid-gap: ${space.sm}
  `;
});

const ManageRound = () => {
  const {
    round,
    setRound,
    nextRound,
    prevRound,
    turn,
    setTurn,
    nextTurn,
    prevTurn,
  } = useTurnContext();
  return (
    <Wrapper>
      <Row>
        <div>
          {`Round ${round}`}
        </div>
        <div>
          <Button tiny onClick={() => prevRound()}>
            <Icon fixedWidth name="angle-left" />
          </Button>
          <Button tiny onClick={() => nextRound()}>
            <Icon fixedWidth name="angle-right" />
          </Button>
        </div>
        <div>
          <Button tiny onClick={() => setRound(1)}>
            <Icon fixedWidth name="undo" />
          </Button>
        </div>
      </Row>
      <Row>
        <div>
          {`Turn ${turn}`}
        </div>
        <div>
          <Button tiny onClick={() => prevTurn()}>
            <Icon fixedWidth name="angle-left" />
          </Button>
          <Button tiny onClick={() => nextTurn()}>
            <Icon fixedWidth name="angle-right" />
          </Button>
        </div>
        <div>
          <Button tiny onClick={() => setTurn(1)}>
            <Icon fixedWidth name="undo" />
          </Button>
        </div>
      </Row>
    </Wrapper>
  );
};

export default ManageRound;
