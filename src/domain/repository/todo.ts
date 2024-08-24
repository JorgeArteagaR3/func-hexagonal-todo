import { Todo } from "../entitites/todo";

export type TodoRepository = {
  getAll: () => Promise<Todo[]>;
  toggleTodo: ({ id }: { id: string }) => Promise<void>;
  addTodo: ({ title }: { title: string }) => Promise<void>;
  deleteTodo: ({ id }: { id: string }) => Promise<void>;
};
