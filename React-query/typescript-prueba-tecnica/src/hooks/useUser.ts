import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchUsers } from '../service/users';
import { User } from '../types';

export const useUser = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    ...rest
  } = useInfiniteQuery<{
    users: User[];
    nextPage?: number;
  }>(['users'], fetchUsers, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  return {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    ...rest,
  };
};
