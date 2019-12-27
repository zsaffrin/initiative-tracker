import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

import { usePageContext } from '../../../hooks';
import { Placeholder } from '../../ui';
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
const PseudoLink = styled.span`
  text-decoration: underline;
`;

const ParticipantList = ({ items }) => {
  const { changePage } = usePageContext();

  return (
    <StyledList>
      {items.length > 0
        ? items.map((item) => <ParticipantListItem item={item} key={item.id} />)
        : (
          <Placeholder>
            <div>No participants yet</div>
            <div>
              <PseudoLink onClick={() => changePage('manageParticipants')}>
                Add some!
              </PseudoLink>
            </div>
          </Placeholder>
        )}
    </StyledList>
  );
};

ParticipantList.propTypes = {
  items: arrayOf(shape({})),
};
ParticipantList.defaultProps = {
  items: [],
};

export default ParticipantList;
