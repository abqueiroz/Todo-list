import { useMemo, useState } from 'react';

import styled from 'styled-components';
import { Typography, TextInput, Button, ProgressBar } from './components/atom';
import { TodoList } from './components/organisms';
import { useTodos } from './context/Todo';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  height: 80vh;
  padding: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ProgressbarContainer = styled.div`
padding: 1rem 0;
`

export default function App() {
  const { todos, addTodo } = useTodos();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value !== '') {
      addTodo(value);
      setInputValue('');
    }
  };

  const progress = useMemo(() => {
    const value = 100 * ((todos.filter((todo) => todo.done)?.length) / (todos.length))
    return isNaN(value) ? 0 : value
  }, [todos])

  return (
    <Container>
      <Typography $size="heading" $color="secondary">Todo List</Typography>
      <ProgressbarContainer>
        <ProgressBar value={progress} />
      </ProgressbarContainer>
      <Form onSubmit={handleSubmit}>
        <TextInput
          placeholder="New item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </Form>
      <TodoList />
    </Container>
  );
}
