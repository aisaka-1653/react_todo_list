import { useCallback, useState } from "react";
import { Todo } from "../types/todo";

export const useTodos = () => {
  const [nextId, setNextId] = useState(0);
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo = useCallback(
    (title: string) => {
      const newTodo: Todo = { id: nextId, title, done: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNextId((prevId) => prevId + 1);
    },
    [nextId]
  );

  const updateTodo = useCallback((id: number, title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  return { todos, addTodo, updateTodo, deleteTodo, toggleTodo };
};
