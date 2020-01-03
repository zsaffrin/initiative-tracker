import React, { createContext, useContext } from 'react';
import {
  arrayOf, oneOfType, node, shape,
} from 'prop-types';

import { generateId } from '../utils';
import { FirebaseContext } from './firebaseContext';

const ListContext = createContext();

const ListProvider = ({ list, children }) => {
  const firebase = useContext(FirebaseContext);

  const updateList = (listId, newData) => {
    firebase.updateDoc(`lists/${listId}`, newData);
  };

  const addParticipant = () => {
    const { id, participants, ...rest } = list;
    updateList(id, {
      ...rest,
      participants: [
        ...participants,
        {
          id: generateId(10),
          name: '',
        },
      ],
    });
  };

  return (
    <ListContext.Provider value={{
      list,
      updateList,
      addParticipant,
    }}
    >
      {children}
    </ListContext.Provider>
  );
};
ListProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  list: shape({}),
};
ListProvider.defaultProps = {
  children: [],
  list: {},
};

export { ListContext, ListProvider };
