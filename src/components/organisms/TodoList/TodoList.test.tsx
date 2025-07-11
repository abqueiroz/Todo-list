import { screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';
import { useTodoList as mockUseTodoList } from './useTodoList';
import { vi } from 'vitest'
import { renderUi } from '@/tests/utils/renderUi';
vi.mock('./useTodoList');

describe('TodoList', () => {
    const mockedUseTodoList = mockUseTodoList as jest.MockedFunction<typeof mockUseTodoList>;

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders todo list with TodoItem component', () => {
        mockedUseTodoList.mockReturnValue({
            todos: [
                { id: 1, text: 'First Todo', done: false },
                { id: 2, text: 'Second Todo', done: true },
            ],
            deleteTodo: vi.fn(),
            editValue: '',
            editingId: null,
            saveEdit: vi.fn(),
            startEditing: vi.fn(),
            toggleTodo: vi.fn(),
            setEditingId: vi.fn(),
            setEditValue: vi.fn(),
        });

        renderUi(<TodoList />);

        expect(screen.getByText('First Todo')).toBeInTheDocument();
        expect(screen.getByText('Second Todo')).toBeInTheDocument();
    });

    it('renders TodoItemEdit when an item is being edited', () => {
        mockedUseTodoList.mockReturnValue({
            todos: [{ id: 1, text: 'Editable', done: false }],
            deleteTodo: vi.fn(),
            editValue: 'Editable',
            editingId: 1,
            saveEdit: vi.fn(),
            startEditing: vi.fn(),
            toggleTodo: vi.fn(),
            setEditingId: vi.fn(),
            setEditValue: vi.fn(),
        });

        renderUi(<TodoList />);

        expect(screen.getByPlaceholderText('Editable')).toBeInTheDocument();
    });

    it('calls deleteTodo when the delete button is clicked', () => {
        const deleteTodo = vi.fn();

        mockedUseTodoList.mockReturnValue({
            todos: [{ id: 1, text: 'Delete Me', done: false }],
            deleteTodo,
            editValue: '',
            editingId: null,
            saveEdit: vi.fn(),
            startEditing: vi.fn(),
            toggleTodo: vi.fn(),
            setEditingId: vi.fn(),
            setEditValue: vi.fn(),
        });

        renderUi(<TodoList />);
        const deleteButton = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(deleteButton);
        expect(deleteTodo).toHaveBeenCalledWith(1);
    });

    it('calls toggleTodo when the task state changes', () => {
        const toggleTodo = vi.fn();

        mockedUseTodoList.mockReturnValue({
            todos: [{ id: 1, text: 'Mark as done', done: false }],
            deleteTodo: vi.fn(),
            editValue: '',
            editingId: null,
            saveEdit: vi.fn(),
            startEditing: vi.fn(),
            toggleTodo,
            setEditingId: vi.fn(),
            setEditValue: vi.fn(),
        });

        renderUi(<TodoList />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(toggleTodo).toHaveBeenCalledWith(1);
    });
});