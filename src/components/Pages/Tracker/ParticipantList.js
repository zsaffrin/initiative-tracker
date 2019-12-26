import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

import ParticipantListItem from './ParticipantListItem';

const StyledList = styled.ul(({ theme }) => {
  const { space } = theme;
  return `
    padding: ${space.md};
    display: grid;
    grid-gap: ${space.md};
    list-style: none;
    margin: 0;
  `;
});

const ParticipantList = ({ items }) => (
  <StyledList>
    {items.map((item) => <ParticipantListItem item={item} key={item.id} />)}
  </StyledList>
);

ParticipantList.propTypes = {
  items: arrayOf(shape({})),
};
ParticipantList.defaultProps = {
  items: [],
};

export default ParticipantList;
