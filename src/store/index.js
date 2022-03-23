import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addNote = (payload) => {
  return {
    type: 'notes/add',
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};

export const removeNote = (payload) => {
  return {
    type: 'notes/remove',
    payload,
  };
};

const initialState = {
  notes: [
    {
      id: uuid(),
      title: 'My personal note',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo ex necessitatibus voluptate sed distinctio, optio sequi inventore repellat repellendus.',
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notes/add':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case 'notes/remove':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
