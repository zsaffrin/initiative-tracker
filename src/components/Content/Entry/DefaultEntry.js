import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Button, Icon, Input } from '../../ui';

const CenteredGrid = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: ${space.md};
  `;
});
const PageLayout = styled(CenteredGrid)(({ theme }) => {
  const { color } = theme;
  return `
    color: ${color.accent};
    grid-template-rows: repeat(2, 1fr auto) 1fr;
  `;
});
const Big = styled.div`
  font-size: 2em;
`;
const Title = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
`;
const HR = styled.hr(({ theme }) => {
  const { color } = theme;
  return `
    border: none;
    height: 1px;
    background: ${color.accent};
    width: 30vw;
  `;
});
const InputCell = styled.div`
  width: 95vw;
  max-width: 12em;
`;

const DefaultEntry = () => {
  const [enteredKey, setEnteredKey] = useState('');
  const history = useHistory();

  const handleKeyFieldChange = (e) => {
    setEnteredKey(e.target.value);
  };

  const handleKeySubmit = () => {
    history.push(`/session/${enteredKey}`);
  };

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
        <div>
          <Button>New Session</Button>
        </div>
      </CenteredGrid>
      <CenteredGrid>
        <HR />
      </CenteredGrid>
      <CenteredGrid>
        <div>Joining a Session?</div>
        <InputCell>
          <Input
            value={enteredKey}
            onChange={handleKeyFieldChange}
            style={{
              textAlign: 'center',
            }}
          />
        </InputCell>
        <div>
          <Button small onClick={handleKeySubmit}>Enter Key</Button>
        </div>
      </CenteredGrid>
    </PageLayout>
  );
};

export default DefaultEntry;
