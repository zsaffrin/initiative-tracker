import React from 'react';
import styled from 'styled-components';

import { useListContext } from '../../../../../hooks';
import { ButtonRow, Button } from '../../../../ui';
import ParticipantListItem from './ParticipantListItem';

const StyledList = styled.ul(({ theme }) => {
  const { space } = theme;
  return `
    list-style: none;
    margin: 0;
    padding: 0;
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
          ? participants.map((p) => <ParticipantListItem item={p} key={p.id} />)
          : 'No participants'}
      </StyledList>
    </div>
  );
};

export default ParticipantList;
