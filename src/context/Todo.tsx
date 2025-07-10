
import { createContext, useContext } from 'react';
import type { Todo } from '../components/organisms';

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
};

export const TodoContext = createContext({} as TodoContextType);
export const useTodos = () => useContext(TodoContext);