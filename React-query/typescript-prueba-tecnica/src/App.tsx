import { useMemo, useState } from 'react';
import './App.css';
import { UsersList } from './components/UsersList';
import { SortBy, type User } from './types.d';
import { useUser } from './hooks/useUser';
import Counter from './components/Counter';

function App() {
  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useUser();

  const users: Array<User> = data?.pages.flatMap((page) => page.users) || [];
  // const originalUsers = useRef<User[]>([]);
  // useRef -> para guardar un valor
  // que queremos que se comparta entre renderizados
  // pero que al cambiar, no vuelva a renderizar el componente

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const handleReset = async () => {
    await refetch();
  };

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email);
    // setUsers(filteredUsers);
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

  console.log(data);

  const filteredUsers = useMemo(() => {
    console.log('calculate filteredUsers');
    return filterCountry != null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase());
        })
      : users;
  }, [users, filterCountry]);

  const sortedUsers = useMemo(() => {
    console.log('calculate sortedUsers');

    if (sorting === SortBy.NONE) return filteredUsers;

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    };

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting];
      return extractProperty(a).localeCompare(extractProperty(b));
    });
  }, [filteredUsers, sorting]);

  return (
    <div className="App">
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear files</button>

        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY
            ? 'No ordenar por país'
            : 'Ordenar por país'}
        </button>

        <button onClick={handleReset}>Resetear estado</button>

        <input
          placeholder="Filtra por país"
          onChange={(e) => {
            setFilterCountry(e.target.value);
          }}
        />
      </header>
      <main>
        <Counter />
        {users.length > 0 && (
          <>
            <UsersList
              changeSorting={handleChangeSort}
              deleteUser={handleDelete}
              showColors={showColors}
              users={sortedUsers}
            />

            {hasNextPage && (
              <button onClick={() => fetchNextPage()}>Next page</button>
            )}
          </>
        )}
        {isLoading && <p>Loading Users...</p>}

        {!isLoading && isError && <p>Error: {error.message}</p>}

        {!isLoading && !isError && users.length === 0 && (
          <p>We do not have any users</p>
        )}
      </main>
    </div>
  );
}

export default App;
