import { TODO_FILTERS } from "../consts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, 'id'>;

export type ListOfTodos = Array<Todo>;

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
