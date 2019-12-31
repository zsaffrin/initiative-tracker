import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import {
  Button, Icon, Input, Link,
} from '../../ui';

const CenteredGrid = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: ${space.md};

    & > div {
      text-align: center;
    }
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
const InputCell = styled.div`
  width: 95vw;
  max-width: 12em;
`;

const SessionNotFound = () => {
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
        <Big>
          <Link to="/">
            <Icon name="dice-d20" />
          </Link>
        </Big>
      </CenteredGrid>
      <CenteredGrid>
        <div>Session not found</div>
        <div>
          The key may be incorrect
          <br />
          or the session may have expired
        </div>
      </CenteredGrid>
      <CenteredGrid>
        <div>Try another?</div>
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
          <Button small onClick={handleKeySubmit}>Submit</Button>
        </div>
      </CenteredGrid>
      <CenteredGrid>
        <div>or start a new session</div>
        <div>
          <Button small>Start New Session</Button>
        </div>
      </CenteredGrid>
    </PageLayout>
  );
};

export default SessionNotFound;
