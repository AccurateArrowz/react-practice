// TodoApp.tsx
import { useState } from "react";
import TodoList from "./TodoList";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />

      <button onClick={addTodo}>Add</button>

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default TodoPage;