import React from 'react';

import { useCollection } from '../../hooks';

const ContentHome = () => {
  const [keys] = useCollection('keys');

  return (
    <div>
      <div>Keys</div>
      <div>{JSON.stringify(keys, ' ', 2)}</div>
    </div>
  );
};

export default ContentHome;
