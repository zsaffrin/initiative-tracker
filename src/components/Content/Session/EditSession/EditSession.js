import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { useListContext } from '../../../../hooks';
import { Button, ButtonRow, H } from '../../../ui';
import ParticipantList from './ParticipantList';

const EditSession = () => {
  const { list } = useListContext();
  const { sharekey } = useParams();
  const history = useHistory();

  if (list.access !== 'edit') {
    return <Redirect to={`/session/${sharekey}`} />;
  }

  return (
    <div>
      <H l={2} centered>Manage Session</H>
      <ParticipantList />
      <ButtonRow>
        <Button primary onClick={() => history.push(`/session/${sharekey}`)}>Done</Button>
      </ButtonRow>
    </div>
  );
};

export default EditSession;
