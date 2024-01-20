import { Toaster } from 'sonner';
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';

function App() {
  return (
    <>
      <h1 className="text-red-400">Project with Redux</h1>
      <ListOfUsers />

      <CreateUser />
      <Toaster richColors />
    </>
  );
}

export default App;
