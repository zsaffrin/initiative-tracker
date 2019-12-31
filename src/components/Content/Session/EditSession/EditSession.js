import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { useListContext } from '../../../../hooks';
import { Button } from '../../../ui';

const EditSession = () => {
  const list = useListContext();
  const { sharekey } = useParams();
  const history = useHistory();

  if (list.access !== 'edit') {
    return <Redirect to={`/session/${sharekey}`} />;
  }

  return (
    <div>
      <div>
        <Button primary onClick={() => history.push(`/session/${sharekey}`)}>Done</Button>
      </div>
    </div>
  );
};

export default EditSession;
