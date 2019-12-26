import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

import { useTurnContext } from '../../../hooks';

const NameCell = styled.div``;

const StyledItem = styled.li(({ active, theme }) => {
  const { color, space, tracker } = theme;
  return `
    background: ${active ? tracker.currentTurnItemBg : 'inherit'}
    border: 1px solid ${color.gray};
    border-radius: 4px;
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: 2em 1fr;

    & > ${NameCell} {
      color: ${active ? tracker.currentTurnItemColor : 'inherit'};
      font-weight: ${active ? 'bold' : 'inherit'};
    }
  `;
});

const RollCell = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ParticipantListItem = ({ item }) => {
  const { turn } = useTurnContext();
  const { name, order } = item;
  return (
    <StyledItem active={turn === order ? 1 : 0}>
      <RollCell>
        {order}
      </RollCell>
      <NameCell>
        {name}
      </NameCell>
    </StyledItem>
  );
};

ParticipantListItem.propTypes = {
  item: shape({
    name: string,
  }),
};
ParticipantListItem.defaultProps = {
  item: {
    name: '',
  },
};

export default ParticipantListItem;
