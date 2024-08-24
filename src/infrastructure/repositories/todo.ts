import { Todo } from "../../domain/entitites/todo";
import { TodoRepository } from "../../domain/repository/todo";
import { v4 } from "uuid";

export const CreateTodoRepository = (): TodoRepository => {
  let todos: Todo[] = [
    { id: v4(), completed: false, title: "Test 1" },
    { id: v4(), completed: false, title: "Test 2" },
    { id: v4(), completed: false, title: "Test 3" },
  ];

  return {
    getAll: async () => todos,
    addTodo: async ({ title }) => {
      todos = [...todos, { completed: false, id: v4(), title }];
    },
    deleteTodo: async ({ id }) => {
      const filteretTodos = todos.filter((todo) => todo.id !== id);
      todos = filteretTodos;
    },
    toggleTodo: async ({ id }) => {
      const toggledTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      todos = toggledTodos;
    },
  };
};
