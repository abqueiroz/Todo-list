import { useEffect, useState, type ReactNode } from 'react';
import { TodoContext } from '../context/Todo';
import type { Todo } from '../components/organisms';


export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        const stored = localStorage.getItem('todos');
        if (stored) {
            try {
                setTodos(JSON.parse(stored));
            } catch (err) {
                const message = err instanceof Error ? err.message : 'General error'
                console.error(message)
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function addTodo(text: string) {
        const newTodo = { id: Date.now(), text, done: false };
        setTodos((prev) => [newTodo, ...prev]);
    }

    function toggleTodo(id: number) {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    }

    function deleteTodo(id: number) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }

    function editTodo(id: number, newText: string) {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
        );
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
}
