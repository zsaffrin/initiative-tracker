import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';

import { Icon, Input } from '../../ui';
import { useParticipantContext } from '../../../hooks';
// import { sortParticipantsByRoll } from '../../../utils';

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

const ParticipantListItem = ({ participant }) => {
  const { updateParticipant, deleteParticipant, setNewParticipantOrder } = useParticipantContext();


  const handleFieldChange = (e) => {
    updateParticipant({
      ...participant,
      [e.target.id]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    });
  };

  const handleDelete = () => {
    deleteParticipant(participant);
  };

  const orderDown = () => {
    setNewParticipantOrder(participant, participant.order + 1);
  };
  const orderUp = async () => {
    if (participant.order !== 0) {
      setNewParticipantOrder(participant, participant.order - 1);
    }
  };

  return (
    <StyledItem>
      <OrderCell>
        <Icon name="arrow-up" fixedWidth onClick={orderUp} />
        <Icon name="arrow-down" fixedWidth onClick={orderDown} />
      </OrderCell>
      <RollCell>
        <Input
          id="roll"
          type="number"
          centered
          value={participant.roll === 0 ? '' : participant.roll}
          onChange={handleFieldChange}
        />
      </RollCell>
      <div>
        <Input id="name" value={participant.name} onChange={handleFieldChange} />
      </div>
      <Icon name="trash-alt" onClick={handleDelete} />
    </StyledItem>
  );
};

ParticipantListItem.propTypes = {
  participant: shape({}),
};
ParticipantListItem.defaultProps = {
  participant: {},
};

export default ParticipantListItem;
