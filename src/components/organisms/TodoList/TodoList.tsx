
import { useState } from 'react';
import * as Styled from './TodoList.styled'
import { TextInput, Button } from '@/components/atom';
import { useTodos } from '@/context/Todo';
import { Checkbox, type CheckboxProps } from '@/components/molecules';

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
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState('');

    const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();

    const startEditing = (id: number, currentText: string) => {
        setEditingId(id);
        setEditValue(currentText);
    };

    const saveEdit = () => {
        if (editingId && editValue.trim()) {
            editTodo(editingId, editValue.trim());
        }
        setEditingId(null);
        setEditValue('');
    };

    return (
        <Styled.TodoListContainer>
            {todos.map((todo) => (
                <Styled.TodoItem key={todo.id}>
                    {editingId === todo.id ?
                        <>
                            <TextInput
                                value={editValue}
                                placeholder={todo.text}
                                onChange={(e) => setEditValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') saveEdit();
                                    if (e.key === 'Escape') setEditingId(null);
                                }}
                                autoFocus
                            />
                            <Styled.ButtonsContainer>
                                <Button $size='small' onClick={() => saveEdit()}>
                                    Save
                                </Button>
                                <Button $size='small' $variant='secondary' onClick={() => setEditingId(null)}>
                                    Cancel
                                </Button>
                            </Styled.ButtonsContainer>

                        </> :
                        <>
                            <Checkbox
                                id={todo.id.toString()}
                                $label={todo.text}
                                defaultChecked={todo.done}
                                checked={todo.done}
                                onCheckedChange={() => { toggleTodo(todo.id) }}
                                {...props}
                            />
                            <Styled.ButtonsContainer>
                                <Button $size='small' $variant='tertiary' onClick={() => startEditing(todo.id, todo.text)}>
                                    Edit
                                </Button>
                                <Button $size='small' $variant='alert' onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </Button>
                            </Styled.ButtonsContainer>
                        </>}

                </Styled.TodoItem>
            ))}
        </Styled.TodoListContainer>)
}