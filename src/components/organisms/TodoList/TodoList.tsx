import * as Styled from './TodoList.styled'
import { type CheckboxProps } from '@/components/molecules';
import { useTodoList } from './useTodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoItemEdit } from './components/TodoEditItem/TodoEditItem';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

/**
 * Renders a list of todo items with interactive checkboxes, supporting editing and deletion.
 * 
 * Each todo item can be toggled as done/undone, edited inline, or removed.
 * Editing a todo shows an input field with save and cancel buttons.
 * 
 * This component receives props that are passed down to each Checkbox item,
 * excluding `$label`, `id`, and `onChange` which are managed internally.
 * 
 * @param [...] - Inherits all props from Checkbox, except '$label', 'id', and 'onChange'.
 */
export function TodoList(props: Omit<CheckboxProps, '$label' | 'id' | 'onChange'>) {
    const { todos, deleteTodo, editValue,
        editingId, saveEdit, startEditing,
        toggleTodo, setEditingId, setEditValue } = useTodoList()
    return (
        <Styled.TodoListContainer>
            {todos.map((todo) => (
                <Styled.TodoItem key={todo.id}>
                    {editingId === todo.id ?
                        <TodoItemEdit
                            value={editValue}
                            onChange={setEditValue}
                            onSave={saveEdit}
                            onCancel={() => setEditingId(null)}
                            placeholder={todo.text}
                        /> :
                        <TodoItem
                            todo={todo}
                            onEdit={() => startEditing(todo.id, todo.text)}
                            onDelete={() => deleteTodo(todo.id)}
                            onStateChange={() => toggleTodo(todo.id)}
                            {...props}
                        />
                    }

                </Styled.TodoItem>
            ))}
        </Styled.TodoListContainer>)
}