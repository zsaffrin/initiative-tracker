import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../../hooks';
import { Icon } from '../ui';

const StyledHeader = styled.div(({ theme }) => {
  const { header, space } = theme;
  return `
    background: ${header.background};
    color: ${header.color};
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: ${space.md};
  `;
});
const TitleCell = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const Header = () => {
  const { activePage, changePage } = usePageContext();
  return (
    <StyledHeader>
      <TitleCell onClick={() => changePage()}>
        <Icon name="dice-d20" />
        {' '}
        Initiative Tracker
      </TitleCell>
      <div>
        {!activePage && (
          <Icon
            name="cog"
            fixedWidth
            onClick={() => changePage('manageParticipants')}
          />
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
