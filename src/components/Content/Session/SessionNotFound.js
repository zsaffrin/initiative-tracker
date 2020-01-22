import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useFirebase } from '../../../hooks';
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
  const [adding, setAdding] = useState(false);
  const firebase = useFirebase();
  const history = useHistory();

  const handleKeyFieldChange = (e) => {
    setEnteredKey(e.target.value);
  };

  const handleKeySubmit = () => {
    history.push(`/session/${enteredKey}`);
  };

  const handleNewSession = async () => {
    setAdding(true);
    return firebase.db.collection('lists').add({
      round: 1,
      turn: 1,
      participants: [],
      created: new Date(),
    }).then(async (list) => {
      const viewKey = await firebase.db.collection('keys').add({
        type: 'view',
        list: list.id,
        created: new Date(),
      });
      const editKey = await firebase.db.collection('keys').add({
        type: 'edit',
        list: list.id,
        created: new Date(),
      });

      return { list, viewKey, editKey };
    }).then(({ editKey }) => history.push(`/session/${editKey.id}`));
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
          <Button onClick={handleKeySubmit}>Enter Key</Button>
        </div>
      </CenteredGrid>
      <CenteredGrid>
        <div>or start a new session</div>
        <div>
          {adding
            ? <span>Creating...</span>
            : <Button onClick={handleNewSession}>Start New Session</Button>}
        </div>
      </CenteredGrid>
    </PageLayout>
  );
};

export default SessionNotFound;
