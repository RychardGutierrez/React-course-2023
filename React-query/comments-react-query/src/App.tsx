import './App.css';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getComments,
  type CommentWithId,
  type Comment,
  postComment,
} from './service/comments';
import { FormInput, FormTextArea } from './components/Form';
import { Results } from './components/Results';

function App() {
  const { data, isLoading, error } = useQuery<CommentWithId[]>(
    ['comments'], // <-----
    getComments
  );
  const queryClient = useQueryClient();

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: postComment,
    onMutate: async (newComment) => {
      await queryClient.cancelQueries({ queryKey: ['comments'] });
      const previousComments = await queryClient.getQueryData<CommentWithId[]>([
        'comments',
      ]);
      await queryClient.setQueryData(
        ['comments'],
        (oldComments?: Comment[]) => {
          if (oldComments == null) {
            return [];
          }
          return [...oldComments, newComment];
        }
      );
      return { previousComments };
    },
    onError: (error, variables, context) => {
      console.error(error);
      queryClient.setQueryData(['comments'], context?.previousComments ?? []);
    },
    onSuccess: async (newComment) => {
      // 1: Update the query cache
      // await queryClient.setQueryData(
      //   ['comments'],
      //   (oldComments?: CommentWithId[]) => {
      //     if (oldComments == null) {
      //       return [];
      //     }
      //     return [...oldComments, newComment];
      //   }
      // );
      // 2: Do refresh of the data
      // await queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = (data.get('message') as string) ?? '';
    const title = (data.get('title') as string) ?? '';
    if (message && title) {
      mutate({
        title,
        message,
      });
    }
  };

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="col-span-1 p-8 bg-white">
        {isLoading && <strong>Cargando...</strong>}
        {error != null && <strong>Algo ha ido mal</strong>}
        <Results data={data} />
      </div>
      <div className="col-span-1 p-8 bg-black">
        <form
          className={`${
            isLoadingMutation ? 'opacity-40' : ''
          } block max-w-xl px-4 m-auto`}
          onSubmit={handleSubmit}
        >
          <FormInput />
          <FormTextArea />

          <button
            disabled={isLoadingMutation}
            type="submit"
            className="mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2"
          >
            {isLoadingMutation ? 'Enviando comentario...' : 'Enviar comentario'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
