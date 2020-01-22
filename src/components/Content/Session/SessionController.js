import React from 'react';
import { useParams } from 'react-router-dom';

import { useDocument } from '../../../hooks';
import Session from './Session';
import SessionLoading from './SessionLoading';
import SessionNotFound from './SessionNotFound';

const SessionController = () => {
  const { sharekey } = useParams();
  const [keyRecord, keyRecordLoading] = useDocument(`keys/${sharekey}`);
  const [list, listLoading] = useDocument(`lists/${keyRecord ? keyRecord.list : ' '}`);

  const activeList = {
    ...list,
    access: keyRecord ? keyRecord.type : 'none',
  };

  if (!keyRecordLoading && keyRecord && !keyRecord.exists) {
    return <SessionNotFound />;
  }

  if (!keyRecordLoading) {
    if (keyRecord && !keyRecord.exists) {
      return <SessionNotFound />;
    }

    if (!listLoading) {
      return <Session list={activeList} />;
    }
  }

  return <SessionLoading />;
};

export default SessionController;
