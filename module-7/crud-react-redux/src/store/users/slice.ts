// Slice is a part of the store

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UseId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UsersState extends User {
  id: UseId;
}

const usersDataFake: Array<UsersState> = [
  {
    id: '1',
    name: 'Peter Doe',
    email: 'peter.doe@test.com',
    github: 'peter-doe',
  },
  {
    id: '2',
    name: 'Lena Whitehouse',
    email: 'lena.whitehouse@test.com',
    github: 'lena-whitehouse',
  },
  {
    id: '3',
    name: 'Phil Less',
    email: 'phil.less@test.com',
    github: 'phil-less',
  },
  {
    id: '4',
    name: 'John Camper',
    email: 'john.camper@test.com',
    github: 'john-camper',
  },
];

const initialState: Array<UsersState> = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

// Actions
const deleteUserByIdAction = (
  state: Array<UsersState>,
  action: PayloadAction<UseId>
) => {
  const id = action.payload;
  return state.filter((user) => user.id !== id);
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { ...action.payload, id }];
    },
    deleteUserById: deleteUserByIdAction,
    rollbackDeleteUser: (state, action: PayloadAction<UsersState>) => {
      const isUserAlredyDefined = state.some(
        (user) => user.id === action.payload.id
      );

      if (!isUserAlredyDefined) {
        return [...state, action.payload];
      }
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser, rollbackDeleteUser } =
  usersSlice.actions;
