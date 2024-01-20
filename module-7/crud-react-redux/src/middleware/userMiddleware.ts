import { type Middleware } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import { rollbackDeleteUser } from '../store/users/slice';

export const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()));
  };

export const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  // fase 1
  console.log('fase 1');
  console.log({ action, state: store.getState() });
  const previousState = store.getState();

  next(action);

  if (type === 'users/deleteUserById') {
    const userToRemove = previousState.users.find(
      (user) => user.id === payload
    );

    fetch(`https://jsonplaceholder.typicode.com/uss/${payload}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`User ${payload} removed success`);
        }
        throw new Error('Error when remove the user');
      })
      .catch((err) => {
        toast.error(`Error removing user ${payload}`);

        if (userToRemove) {
          store.dispatch(rollbackDeleteUser(userToRemove));
        }

        console.log('error: ' + err);
      });
  }

  // fase 2
  console.log('fase 2');
  console.log({ action, state: store.getState() });
};
