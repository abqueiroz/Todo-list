// src/components/molecules/TodoItemEdit.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { vi } from 'vitest'
import { theme } from '@/theme';
import { TodoItemEdit } from './TodoEditItem';

// Mock the child components for isolated testing
vi.mock('@/components/atom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/components/atom')>();
    return {
        ...actual,
        Button: vi.fn((props) => (
            <button {...props} data-testid={`button-${props.children.toString().toLowerCase()}`}>
                {props.children}
            </button>
        )),
        TextInput: vi.fn((props) => (
            <input
                type="text"
                data-testid="text-input"
                {...props}
            />
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


describe('TodoItemEdit', () => {
    const mockProps = {
        value: 'Initial todo text',
        placeholder: 'Edit your todo',
        onChange: vi.fn(),
        onSave: vi.fn(),
        onCancel: vi.fn(),
    };

    // Helper to render the component with ThemeProvider
    const renderWithTheme = (props: Parameters<typeof TodoItemEdit>[0]) => {
        return render(
            <ThemeProvider theme={theme}>
                <TodoItemEdit {...props} />
            </ThemeProvider>
        );
    };

    beforeEach(() => {
        vi.clearAllMocks(); // Clear mocks before each test
    });

    it('renders the TextInput with correct value and placeholder', () => {
        renderWithTheme(mockProps);
        const textInput = screen.getByTestId('text-input');

        expect(textInput).toBeInTheDocument();
        expect(textInput).toHaveValue(mockProps.value);
        expect(textInput).toHaveAttribute('placeholder', mockProps.placeholder);
    });

    it('calls onChange when the TextInput value changes', () => {
        renderWithTheme(mockProps);
        const textInput = screen.getByTestId('text-input');

        fireEvent.change(textInput, { target: { value: 'New todo text' } });
        expect(mockProps.onChange).toHaveBeenCalledTimes(1);
        expect(mockProps.onChange).toHaveBeenCalledWith('New todo text');
    });

    it('calls onSave when "Enter" key is pressed in TextInput', () => {
        renderWithTheme(mockProps);
        const textInput = screen.getByTestId('text-input');

        fireEvent.keyDown(textInput, { key: 'Enter', code: 'Enter' });
        expect(mockProps.onSave).toHaveBeenCalledTimes(1);
        expect(mockProps.onCancel).not.toHaveBeenCalled(); // Ensure cancel isn't called
    });

    it('calls onCancel when "Escape" key is pressed in TextInput', () => {
        renderWithTheme(mockProps);
        const textInput = screen.getByTestId('text-input');

        fireEvent.keyDown(textInput, { key: 'Escape', code: 'Escape' });
        expect(mockProps.onCancel).toHaveBeenCalledTimes(1);
        expect(mockProps.onSave).not.toHaveBeenCalled(); // Ensure save isn't called
    });

    it('renders "Save" and "Cancel" buttons', () => {
        renderWithTheme(mockProps);

        expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('calls onSave when the "Save" button is clicked', () => {
        renderWithTheme(mockProps);
        const saveButton = screen.getByRole('button', { name: /save/i });

        fireEvent.click(saveButton);
        expect(mockProps.onSave).toHaveBeenCalledTimes(1);
    });

    it('calls onCancel when the "Cancel" button is clicked', () => {
        renderWithTheme(mockProps);
        const cancelButton = screen.getByRole('button', { name: /cancel/i });

        fireEvent.click(cancelButton);
        expect(mockProps.onCancel).toHaveBeenCalledTimes(1);
    });

    it('applies autoFocus to the TextInput', () => {
        renderWithTheme(mockProps);
        const textInput = screen.getByTestId('text-input');
        expect(textInput).toHaveFocus();
    });

    it('renders ButtonsContainer', () => {
        renderWithTheme(mockProps);
        expect(screen.getByTestId('buttons-container')).toBeInTheDocument();
    });
});