import React from 'react';
import styled from 'styled-components';

import { useListContext } from '../../../../../hooks';

import ParticipantListItem from './ParticipantListItem';

const StyledList = styled.ul(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.sm};
    list-style: none;
    padding: 0;
    margin: 0;
  `;
});

const ParticipantList = () => {
  const { list } = useListContext();
  const { participants } = list;

  return (
    participants.length > 0
      ? (
        <StyledList>
          {participants.map((p, i) => <ParticipantListItem item={p} order={i + 1} key={p.id} />)}
        </StyledList>
      )
      : (
        <div>
          No participants
        </div>
      )
  );
};

export default ParticipantList;
