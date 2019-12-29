import React from 'react'
import styled from 'styled-components';

import {Icon} from '../../ui'

const CenteredGrid = styled.div(({theme}) => {
  const {space} = theme;
  return `
    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: ${space.md};
  `;
})
const PageLayout = styled(CenteredGrid)(({theme}) => {
  const {color} = theme;
  return `
    color: ${color.accent};
    grid-template-rows: repeat(2, 1fr auto) 1fr;
  `;
})
const Big = styled.div`
  font-size: 2em;
`;
const Title = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
`;
const HR = styled.hr(({theme}) => {
  const {color} = theme;
  return `
    border: none;
    height: 1px;
    background: ${color.accent};
    width: 30vw;
  `;
});

const DefaultEntry = () => {
  return (
    <PageLayout>
      <CenteredGrid>
        <Big><Icon name="dice-d20" /></Big>
        <Title>Initiative Tracker</Title>
      </CenteredGrid>
      <CenteredGrid>
        <HR />
      </CenteredGrid>
      <CenteredGrid>
        <div>Start a new session!</div>
        <div>New Session</div>
      </CenteredGrid>
      <CenteredGrid>
        <HR />
      </CenteredGrid>
      <CenteredGrid>
        <div>Joining a Session?</div>
        <div>Enter Key</div>
      </CenteredGrid>
    </PageLayout>
  )
}

export default DefaultEntry
