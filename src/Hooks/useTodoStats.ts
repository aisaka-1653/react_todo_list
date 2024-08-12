import { useMemo } from "react";
import { Todo } from "../types/todo";

export const useTodoStats = (todos: Array<Todo>) => {
  const stats = useMemo(() => {
    const totalTodos = todos.length;
    const doneTodos = todos.filter((todo) => todo.done).length;
    const pendingTodos = todos.filter((todo) => !todo.done).length;
    return { totalTodos, doneTodos, pendingTodos };
  }, [todos]);

  return stats;
};
