
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TodoItem } from './TodoItem'; // Adjust path as needed
import { vi } from 'vitest'
import { theme } from '@/theme';

vi.mock('@/components/atom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/components/atom')>();
    return {
        ...actual,
        Button: vi.fn((props) => (
            <button {...props} data-testid={`button-${props.$variant}`}>
                {props.children}
            </button>
        )),
    };
});

vi.mock('@/components/molecules', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/components/molecules')>();
    return {
        ...actual,
        Checkbox: vi.fn(({ id, $label, checked, defaultChecked, onCheckedChange, ...rest }) => (
            <label htmlFor={id} data-testid={`checkbox-label-${id}`}>
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={(e) => onCheckedChange?.(e.target.checked)}
                    data-testid={`checkbox-input-${id}`}
                    {...rest}
                />
                {$label}
            </label>
        )),
    };
});

vi.mock('../../TodoList.styled', async (importOriginal) => {
    const actual = await importOriginal<typeof import('../../TodoList.styled')>();
    return {
        ...actual,
        ButtonsContainer: vi.fn((props) => (
            <div data-testid="buttons-container" {...props}>
                {props.children}
            </div>
        )),
    };
});


describe('TodoItem', () => {
    const mockTodo = {
        id: 1,
        text: 'Learn Vitest',
        done: false,
    };

    const mockOnEdit = vi.fn();
    const mockOnDelete = vi.fn();
    const mockOnStateChange = vi.fn();

    const renderWithTheme = (props: Parameters<typeof TodoItem>[0]) => {
        return render(
            <ThemeProvider theme={theme}>
                <TodoItem {...props} />
            </ThemeProvider>
        );
    };

    beforeEach(() => {
        vi.clearAllMocks(); // Clear mocks before each test
    });

    it('renders the todo text as checkbox label', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        expect(screen.getByText('Learn Vitest')).toBeInTheDocument();
        expect(screen.getByTestId(`checkbox-input-${mockTodo.id}`)).toBeInTheDocument();
    });

    it('renders the checkbox with the correct checked state:false', () => {
        renderWithTheme({
            todo: { ...mockTodo, done: false },
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });
        const uncheckedCheckbox = screen.getByTestId(`checkbox-input-${mockTodo.id}`);
        expect(uncheckedCheckbox).not.toBeChecked();
    });

    it('renders the checkbox with the correct checked state:true', () => {
        renderWithTheme({
            todo: { ...mockTodo, done: true }, // Todo is done
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        const checkbox = screen.getByTestId(`checkbox-input-${mockTodo.id}`);
        expect(checkbox).toBeChecked();
    });

    it('calls onStateChange when the checkbox is clicked', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        const checkbox = screen.getByTestId(`checkbox-input-${mockTodo.id}`);
        fireEvent.click(checkbox);
        expect(mockOnStateChange).toHaveBeenCalledTimes(1);
    });

    it('renders "Edit" and "Delete" buttons', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
    });

    it('calls onEdit when the "Edit" button is clicked', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        const editButton = screen.getByRole('button', { name: /edit/i });
        fireEvent.click(editButton);
        expect(mockOnEdit).toHaveBeenCalledTimes(1);
    });

    it('calls onDelete when the "Delete" button is clicked', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(deleteButton);
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });

    it('passes additional checkbox props to the Checkbox component', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
            disabled: true,
        });

        const checkbox = screen.getByTestId(`checkbox-input-${mockTodo.id}`);
        expect(checkbox).toBeDisabled();
    });

    it('renders ButtonsContainer', () => {
        renderWithTheme({
            todo: mockTodo,
            onEdit: mockOnEdit,
            onDelete: mockOnDelete,
            onStateChange: mockOnStateChange,
        });

        expect(screen.getByTestId('buttons-container')).toBeInTheDocument();
    });
});
