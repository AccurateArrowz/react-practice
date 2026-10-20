// TodoList.tsx
import type { Todo } from "./TodoPage";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList({
  todos,
  onToggle,
  onDelete,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;