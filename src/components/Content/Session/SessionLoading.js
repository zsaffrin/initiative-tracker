import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Icon } from '../../ui';

const keyFrameSpin = keyframes`
  100% { 
    transform:rotate(360deg); 
  }
`;

const PageLayout = styled.div(({ theme }) => {
  const { color, space } = theme;
  return `
    color: ${color.accent};
    display: grid;
    align-content: center;
    grid-gap: ${space.xl};
    justify-items: center;
  `;
});
const SpinningIcon = styled.div`
  font-size: 2em;
  animation: ${keyFrameSpin} 2s ease-in-out 0s infinite;
`;

const SessionLoading = () => (
  <PageLayout>
    <SpinningIcon>
      <Icon name="dice-d20" />
    </SpinningIcon>
    <div>
      Loading Session...
    </div>
  </PageLayout>
);

export default SessionLoading;
