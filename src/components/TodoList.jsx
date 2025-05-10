// src/components/TodoList.jsx
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

function TodoList({ todos }) {
  return (
    <AnimatePresence>
      {todos.map((todo, index) => (
        <TodoItem key={todo + index} todo={todo} />
      ))}
    </AnimatePresence>
  );
}

export default TodoList;
