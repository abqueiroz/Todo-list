import { useTodos } from '../../../context/Todo';
import { Checkbox, type CheckboxProps } from '../../molecules';
import * as Styled from './TodoList.styled'
import { Button, TextInput } from '../../atom';
import { useState } from 'react';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

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
                                <Button $variant='secondary' onClick={() => saveEdit()}>
                                    Save
                                </Button>
                                <Button $variant='secondary' onClick={() => setEditingId(null)}>
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
                                <Button $variant='tertiary' onClick={() => startEditing(todo.id, todo.text)}>
                                    Edit
                                </Button>
                                <Button $variant='secondary' onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </Button>
                            </Styled.ButtonsContainer>
                        </>}

                </Styled.TodoItem>
            ))}
        </Styled.TodoListContainer>)
}