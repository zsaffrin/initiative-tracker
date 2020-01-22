import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useListContext } from '../../../../../hooks';
import { Button, Icon } from '../../../../ui';

const Layout = styled.div(({ confirmReset, theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.md};
    grid-template-columns: ${confirmReset ? 'repeat(3, auto)' : '1fr 1fr auto'};
    justify-items: center;
    align-items: center;
    padding: 0 ${space.md};
  `;
});
const DisplayWithIncrement = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: repeat(2, auto);
    justify-items: center;
  `;
});

const ManageTurn = () => {
  const {
    list,
    setRound,
    setTurn,
    decrementTurn,
    incrementTurn,
  } = useListContext();
  const [confirmReset, setConfirmReset] = useState(false);
  const { round, turn, participants } = list;

  useEffect(() => {
    if (turn !== 1 && turn > participants.length) {
      setTurn(participants.length > 1 ? participants.length : 1);
    }
  }, [participants, turn, setTurn]);

  const resetRound = () => {
    setRound(1);
    setTurn(1);
    setConfirmReset(false);
  };

  return (
    <Layout confirmReset={confirmReset ? 1 : 0}>
      {confirmReset ? (
        <>
          <div>
            <Button tiny danger onClick={resetRound}>
              Reset Round/Turn
            </Button>
          </div>
          <div>Are you sure?</div>
          <div>
            <Button tiny onClick={() => setConfirmReset(false)}>
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <>
          <DisplayWithIncrement>
            <div>{`Round ${round}`}</div>
            <div>
              <Button tiny onClick={() => setRound(round > 1 ? round - 1 : 1)}>
                <Icon fixedWidth name="angle-left" />
              </Button>
              <Button tiny onClick={() => setRound(round + 1)}>
                <Icon fixedWidth name="angle-right" />
              </Button>
            </div>
          </DisplayWithIncrement>
          <DisplayWithIncrement>
            <div>{`Turn ${turn}`}</div>
            <div>
              <Button tiny onClick={decrementTurn}>
                <Icon fixedWidth name="angle-left" />
              </Button>
              <Button tiny onClick={incrementTurn}>
                <Icon fixedWidth name="angle-right" />
              </Button>
            </div>
          </DisplayWithIncrement>
          <div>
            <Button tiny onClick={() => setConfirmReset(true)}>
              <Icon fixedWidth name="undo" />
            </Button>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ManageTurn;
