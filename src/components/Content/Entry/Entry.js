import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Button, Icon, Input } from '../../ui';

const PageLayout = styled.div(({ theme }) => {
  const { color, space } = theme;
  return `
    color: ${color.accent};
    display: grid;
    grid-gap: ${space.xl};
    align-content: start;

    & > div {
      padding: ${space.xl} 0;
      display: grid;
      justify-items: center;
      grid-gap: ${space.lg};
    }
  `;
});
const Big = styled.div`
  font-size: 2em;
`;
const Title = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
`;
const InputCell = styled.div`
  width: 95vw;
  max-width: 12em;
`;

const Entry = () => {
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
      <div>
        <Big>
          <Icon name="dice-d20" />
        </Big>
        <Title>Initiative Tracker</Title>
      </div>
      <div>
        <div>Start a new session!</div>
        <div>
          <Button>New Session</Button>
        </div>
      </div>
      <div>
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
      </div>
    </PageLayout>
  );
};

export default Entry;
