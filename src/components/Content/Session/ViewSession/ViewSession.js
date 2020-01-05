import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useListContext } from '../../../../hooks';
import { ButtonRow, Button } from '../../../ui';
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
  const history = useHistory();
  const { sharekey } = useParams();
  const { list, decrementTurn, incrementTurn } = useListContext();
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
          <Button small onClick={decrementTurn}>Prev Turn</Button>
          <Button primary onClick={incrementTurn}>Next Turn</Button>
        </TurnActions>
        )}
      </TopRow>
      <div>
        <ParticipantList />
      </div>
      <ButtonRow>
        <Button small onClick={() => history.push(`/session/${sharekey}/share`)}>Share Session</Button>
      </ButtonRow>
    </PageLayout>
  );
};

export default ViewSession;
