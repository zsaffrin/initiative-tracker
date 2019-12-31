import React from 'react';
import styled from 'styled-components';

import { useListContext } from '../../../../hooks';
import { Button } from '../../../ui';
import ParticipantList from './ParticipantList';

const PageLayout = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.lg};
    align-items: start;
    grid-auto-rows: min-content;
  `;
});

const TopRow = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-gap: ${space.md};
    align-items: center;
    
    & > div {
      text-align: center;
    }
  `;
});
const RoundCountLabel = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
`;
const RoundCount = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
const TurnActions = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.md};
  `;
});

const ViewSession = () => {
  const list = useListContext();
  const { access, round } = list;

  return (
    <PageLayout>
      <TopRow>
        <div>
          <RoundCountLabel>Round</RoundCountLabel>
          <RoundCount>{round}</RoundCount>
        </div>
        {access === 'edit' && (
        <TurnActions>
          <Button small>Prev Turn</Button>
          <Button primary>Next Turn</Button>
        </TurnActions>
        )}
      </TopRow>
      <div>
        <ParticipantList />
      </div>
    </PageLayout>
  );
};

export default ViewSession;
