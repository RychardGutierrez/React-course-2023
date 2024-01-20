import { UseId, addNewUser, deleteUserById } from '../store/users/slice';
import { useAppDispatch } from './store';

export function useUserAction() {
  const dispach = useAppDispatch();

  const handleRemoveUser = (id: UseId) => {
    dispach(deleteUserById(id));
  };

  const addUser = ({ name, email, github }) => {
    dispach(addNewUser({ name, email, github }));
  };

  return { handleRemoveUser, addUser };
}
