import { Todo } from "../../domain/entitites/todo";
import { TodoRepository } from "../../domain/repository/todo";

export const getAllTodos =
  (repository: TodoRepository) => async (): Promise<Todo[]> => {
    return await repository.getAll();
  };

export const toggleTodo =
  (repository: TodoRepository) =>
  async ({ id }: { id: string }) => {
    await repository.toggleTodo({ id });
  };

export const addTodo =
  (repository: TodoRepository) =>
  async ({ text }: { text: string }) => {
    await repository.addTodo({ title: text });
  };

export const deleteTodo =
  (repository: TodoRepository) =>
  async ({ id }: { id: string }) => {
    await repository.deleteTodo({ id });
  };
