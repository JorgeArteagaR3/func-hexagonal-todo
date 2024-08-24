import { Todo } from "../../domain/entitites/todo";

type TodoListProps = {
  todos: Todo[];
  onToggle: ({ id }: { id: string }) => Promise<void>;
  onDelete: ({ id }: { id: string }) => Promise<void>;
};
export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="flex flex-col border gap-2 p-2 rounded-lg">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between bg-gray-200 p-2 rounded-lg"
        >
          <p>{todo.title}</p>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              onToggle({ id: todo.id });
            }}
          />
          <button
            className="bg-red-400 size-8 text-white font-bold rounded-full"
            onClick={async () => await onDelete({ id: todo.id })}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
