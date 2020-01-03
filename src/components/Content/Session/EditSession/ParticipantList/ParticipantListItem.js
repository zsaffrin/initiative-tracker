import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';

import { Icon, Input } from '../../../../ui';

const StyledItem = styled.li(({ theme }) => {
  const { color, space } = theme;
  return `
    border: 1px solid ${color.gray};
    border-radius: 4px;
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: 1.25em 2.5em 1fr auto;
    align-items: center;
  `;
});
const OrderCell = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const RollCell = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ParticipantListItem = ({ item }) => {
  const { name, roll } = item;

  const handleFieldChange = () => {};

  return (
    <StyledItem>
      <OrderCell>
        <Icon name="arrow-up" fixedWidth />
        <Icon name="arrow-down" fixedWidth />
      </OrderCell>
      <RollCell>
        <Input
          id="roll"
          type="number"
          centered
          value={roll === 0 ? '' : roll}
          onChange={handleFieldChange}
        />
      </RollCell>
      <div>
        <Input id="name" value={name} onChange={handleFieldChange} />
      </div>
      <Icon name="trash-alt" />
    </StyledItem>
  );
};
ParticipantListItem.propTypes = {
  item: shape({}),
};
ParticipantListItem.defaultProps = {
  item: {},
};

export default ParticipantListItem;
