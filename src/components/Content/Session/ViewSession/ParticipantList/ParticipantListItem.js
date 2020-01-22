import React from 'react';
import { shape, number } from 'prop-types';
import styled from 'styled-components';

import { useListContext } from '../../../../../hooks';

const StyledItem = styled.li(({ active, theme }) => {
  const { color, space, tracker } = theme;
  return `
    ${active && `background: ${tracker.currentTurnItemBg}`};
    border: 1px solid ${color.gray};
    border-radius: 4px;
    ${active && `color: ${tracker.currentTurnItemColor}`};
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: 2em 1fr;
    align-items: center;
  `;
});
const OrderCell = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ParticipantListItem = ({ item, order }) => {
  const { list } = useListContext();
  const { name } = item;
  const { turn } = list;

  return (
    <StyledItem active={turn === order ? 1 : 0}>
      <OrderCell>{order}</OrderCell>
      <div>{name}</div>
    </StyledItem>
  );
};
ParticipantListItem.propTypes = {
  item: shape({}),
  order: number,
};
ParticipantListItem.defaultProps = {
  item: {},
  order: 0,
};

export default ParticipantListItem;
