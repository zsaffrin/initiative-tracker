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
  `;
});
const ContentWrap = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    padding: ${space.md};
    margin: 0 auto;
    max-width: 36em;
  `;
});
const TitleCell = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const Header = () => {
  const { list } = useListContext();
  const { mode, sharekey } = useParams();

  return (
    <StyledHeader>
      <ContentWrap>
        <TitleCell>
          <Link to="/">
            <Icon name="dice-d20" />
          </Link>
          {' '}
        Initiative Tracker
        </TitleCell>
        <div>
          {list.access === 'edit' && mode !== 'edit' && (
          <Link to={`/session/${sharekey}/edit`}>
            <Icon name="cog" />
          </Link>
          )}
        </div>
      </ContentWrap>
    </StyledHeader>
  );
};

export default Header;
