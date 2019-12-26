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
const ListHeader = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: 0 ${space.md};
    display: grid;
    grid-gap: ${space.sm};
    grid-template-columns: 1.25em 2.5em 1fr auto;
    text-transform: uppercase;

    & > div {
      padding: 0 ${space.sm};
      font-size: 0.8em;
    }
  `;
});
const CenteredDiv = styled.div`
  text-align: center;
`;

const ParticipantList = ({ items }) => (
  <StyledList>
    <ListHeader>
      <div> </div>
      <CenteredDiv>Roll</CenteredDiv>
      <div>Name</div>
      <div> </div>
    </ListHeader>
    {items.map((item) => <ParticipantListItem participant={item} key={item.id} />)}
  </StyledList>
);
ParticipantList.propTypes = {
  items: arrayOf(shape({})),
};
ParticipantList.defaultProps = {
  items: [],
};

export default ParticipantList;
