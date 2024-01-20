import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';

import {
  persistanceLocalStorageMiddleware,
  syncWithDatabase,
} from '../middleware/userMiddleware';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: () => [persistanceLocalStorageMiddleware, syncWithDatabase],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
