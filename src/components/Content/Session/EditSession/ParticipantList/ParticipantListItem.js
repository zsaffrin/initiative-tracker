import React, { useState } from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';

import { useListContext } from '../../../../../hooks';
import { Button, Icon, Input } from '../../../../ui';

const StyledItem = styled.li(({ confirmDelete, theme }) => {
  const { space } = theme;
  return `
    border-radius: 4px;
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: ${confirmDelete ? 'repeat(3, auto)' : '1.25em 2.5em 1fr 1em'};
    align-items: center;
    justify-content: center;
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
  const { updateParticipant, deleteParticipant } = useListContext();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { name, roll } = item;

  const handleFieldChange = (e) => {
    updateParticipant({
      ...item,
      [e.target.id]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    });
  };

  const handleDelete = () => {
    deleteParticipant(item);
  };

  return (
    <StyledItem confirmDelete={confirmDelete ? 1 : 0}>
      {confirmDelete ? (
        <>
          <div>
            <Button small danger onClick={handleDelete}>{`Delete ${name}`}</Button>
          </div>
          <div>Are you sure?</div>
          <div>
            <Button small onClick={() => setConfirmDelete(false)}>Cancel</Button>
          </div>
        </>
      ) : (
        <>
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
          <Icon name="trash-alt" onClick={() => setConfirmDelete(true)} />
        </>
      )}
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
