import { ListOfTodos } from '../types/types';

const API_URL = 'https://api.jsonbin.io/v3/b/63ff3a52ebd26539d087639c';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  order: number;
}

export const fetchTodos = async (): Promise<Array<Todo>> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }

  const { record: todos } = (await res.json()) as { record: Array<Todo> };
  return todos;
};

export const updateTodos = async ({
  todos,
}: {
  todos: ListOfTodos;
}): Promise<boolean> => {
  console.log(import.meta.env.VITE_API_BIN_KEY);
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY,
    },
    body: JSON.stringify(todos),
  });

  return res.ok;
};
