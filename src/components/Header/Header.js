import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useListContext } from '../../hooks';
import { Icon, Link } from '../ui';

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
  const list = useListContext();
  const { sharekey } = useParams();

  return (
    <StyledHeader>
      <TitleCell>
        <Link to="/">
          <Icon name="dice-d20" />
        </Link>
        {' '}
        Initiative Tracker
      </TitleCell>
      <div>
        {list.access === 'edit' && (
          <Link to={`/session/${sharekey}/edit`}>
            <Icon name="cog" />
          </Link>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
