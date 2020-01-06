import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useFirebase } from '../../../hooks';
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
  const [adding, setAdding] = useState(false);
  const history = useHistory();
  const firebase = useFirebase();

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
      <div>
        <Big>
          <Icon name="dice-d20" />
        </Big>
        <Title>Initiative Tracker</Title>
      </div>
      <div>
        <div>Start a new session!</div>
        <div>
          {adding
            ? <span>Creating...</span>
            : <Button onClick={handleNewSession}>New Session</Button>}
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
