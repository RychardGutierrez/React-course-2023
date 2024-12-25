import { useUser } from '../hooks/useUser';

const Counter = () => {
  const { data } = useUser();
  return <h3>Counter: {data?.pages.length}</h3>;
};

export default Counter;
