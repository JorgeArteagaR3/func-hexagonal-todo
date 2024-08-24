import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./infrastructure/components/TodoList";
import { CreateTodoRepository } from "./infrastructure/repositories/todo";
import { Todo } from "./domain/entitites/todo";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  toggleTodo,
} from "./application/use-cases/todo";
import TodoForm from "./infrastructure/components/TodoForm";

const todoRepository = CreateTodoRepository();

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const fetchedTodos = await getAllTodos(todoRepository)();
    setTodos(fetchedTodos);
  };

  const handleToggle = async ({ id }: { id: string }) => {
    await toggleTodo(todoRepository)({ id });
    getTodos();
  };

  const handleOnAdd = async ({ text }: { text: string }) => {
    await addTodo(todoRepository)({ text });
    getTodos();
  };

  const handleOnDelete = async ({ id }: { id: string }) => {
    await deleteTodo(todoRepository)({ id });
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-2">Todo</h1>
      <TodoForm onAdd={handleOnAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleOnDelete}
      />
    </div>
  );
}

export default App;
