import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useListContext } from '../../../../hooks';
import { Button, ButtonRow, H } from '../../../ui';
import ManageTurn from './ManageTurn';
import ParticipantList from './ParticipantList';

const PageLayout = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.md};
  `;
});

const EditSession = () => {
  const { list } = useListContext();
  const { sharekey } = useParams();
  const history = useHistory();
  const { access } = list;

  if (access !== 'edit') {
    return <Redirect to={`/session/${sharekey}`} />;
  }

  return (
    <PageLayout>
      <ManageTurn />
      <div>
        <H l={2} centered compact>Manage Participants</H>
        <ParticipantList />
      </div>
      <ButtonRow>
        <Button primary onClick={() => history.push(`/session/${sharekey}`)}>Done</Button>
      </ButtonRow>
    </PageLayout>
  );
};

export default EditSession;
