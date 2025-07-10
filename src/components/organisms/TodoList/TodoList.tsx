import { useTodos } from '../../../context/Todo';
import { Checkbox, type CheckboxProps } from '../../molecules';
import { TodoItem, TodoListContainer } from './TodoList.styled'
import { Button } from '../../atom';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export function TodoList(props: Omit<CheckboxProps, '$label' | 'id' | 'onChange'>) {
    // const [editingId, setEditingId] = useState<number | null>(null);
    // const [editValue, setEditValue] = useState('');

    const { todos, toggleTodo, deleteTodo } = useTodos();

    // const startEditing = (id: number, currentText: string) => {
    //     setEditingId(id);
    //     setEditValue(currentText);
    // };

    // const saveEdit = () => {
    //     if (editingId && editValue.trim()) {
    //         editTodo(editingId, editValue.trim());
    //     }
    //     setEditingId(null);
    //     setEditValue('');
    // };

    return (
        <TodoListContainer>
            {todos.map((todo) => (
                <TodoItem key={todo.id}>
                    <Checkbox
                        id={todo.id.toString()}
                        $label={todo.text}
                        defaultChecked={todo.done}
                        checked={todo.done}
                        onCheckedChange={() => { toggleTodo(todo.id) }}
                        {...props}
                    />
                    <Button $variant='secondary' onClick={() => deleteTodo(todo.id)}>
                        delete
                    </Button>

                </TodoItem>
            ))}
        </TodoListContainer>)
}