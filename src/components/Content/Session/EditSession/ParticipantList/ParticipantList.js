import React from 'react';
import styled from 'styled-components';

import { useListContext } from '../../../../../hooks';
import { ButtonRow, Button } from '../../../../ui';
import ParticipantListItem from './ParticipantListItem';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const HeaderRow = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-template-columns: 1.25em 2.5em 1fr auto;
    grid-gap: ${space.sm};
    padding: 0 ${space.md};

    & > div {
      font-size: 0.75em;
      text-transform: uppercase;
    }
  `;
});
const Centered = styled.div`
  text-align: center;
`;
const Padded = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: 0 ${space.md};
  `;
});

const ParticipantList = () => {
  const { list, addParticipant, sortParticipantsByKey } = useListContext();
  const { participants } = list;

  return (
    <div>
      <ButtonRow>
        <Button primary small onClick={addParticipant}>Add New</Button>
        <Button small onClick={() => sortParticipantsByKey('roll')}>Sort By Roll</Button>
      </ButtonRow>
      <StyledList>
        {participants.length > 0
          ? (
            <>
              <HeaderRow>
                <div />
                <Centered>Roll</Centered>
                <Padded>Name</Padded>
                <div />
              </HeaderRow>
              {participants.map((p) => <ParticipantListItem item={p} key={p.id} />)}
            </>
          )
          : 'No participants'}
      </StyledList>
    </div>
  );
};

export default ParticipantList;
