import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useCollection, useListContext } from '../../../../hooks';
import { ButtonRow, Button, H } from '../../../ui';
import SharingKey from './SharingKey';

const PageLayout = styled.div(({ edit }) => `
  display: grid;
  grid-template-rows: repeat(${edit ? 3 : 2}, auto) 1fr;
`);

const ShareSession = () => {
  const [showEditKey, setShowEditKey] = useState(false);
  const history = useHistory();
  const { sharekey } = useParams();
  const { list } = useListContext();
  const { id, access } = list;
  const [keys, keysLoading] = useCollection('keys', ['list', '==', id]);

  let editKey = {};
  let viewKey = {};

  if (!keysLoading && keys) {
    editKey = keys.find((k) => k.type === 'edit') || {};
    viewKey = keys.find((k) => k.type === 'view') || {};
  }

  return (
    <PageLayout edit={access === 'edit' ? 1 : 0}>
      <ButtonRow>
        <Button small onClick={() => history.push(`/session/${sharekey}`)}>Back to Session</Button>
      </ButtonRow>
      <div>
        <H l={2} centered>Share Session</H>
      </div>
      {access === 'edit' && (
      <ButtonRow>
        <Button primary={!showEditKey} small onClick={() => setShowEditKey(false)}>View</Button>
        <Button primary={showEditKey} small onClick={() => setShowEditKey(true)}>Edit</Button>
      </ButtonRow>
      )}
      {showEditKey && access === 'edit'
        ? <SharingKey type="edit" shareKey={editKey.id} />
        : <SharingKey type="view" shareKey={viewKey.id} />}
    </PageLayout>
  );
};

export default ShareSession;
