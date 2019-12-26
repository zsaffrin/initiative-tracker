import React from 'react';
import styled from 'styled-components';

import { Icon } from '../ui';

const StyledFooter = styled.div(({ theme }) => {
  const { footer, space } = theme;
  return `
    background: ${footer.footerBg};
    color: ${footer.footerColor};
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: ${space.md};
    
    & > div:first-child {
      font-size: 0.8em;
    }
  `;
});
const Link = styled.a`
  color: inherit;
`;

const Footer = () => (
  <StyledFooter>
    <div>
      Made with
      {' '}
      <Icon name="heart" />
      {' '}
      by Zach Saffrin
    </div>
    <div>
      <Link href="https://github.com/zsaffrin/initiative-tracker" target="_blank">
        <Icon name={{ prefix: 'fab', iconName: 'github' }} />
      </Link>
    </div>
  </StyledFooter>
);

export default Footer;
