import { useMemo, useState } from 'react';

import { Typography, TextInput, Button, ProgressBar } from './components/atom';
import { TodoList } from './components/organisms';
import { useTodos } from './context/Todo';
import { MainPageTemplate } from './components/template/MainPageTemplate';
import * as Styled from './App.styled'


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
    <MainPageTemplate>
      <Typography $size="heading" $color="secondary">Todo List</Typography>
      <Styled.ProgressbarContainer>
        <ProgressBar value={progress} />
      </Styled.ProgressbarContainer>
      <Styled.Form onSubmit={handleSubmit}>
        <TextInput
          placeholder="New item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </Styled.Form>
      <TodoList />
    </MainPageTemplate>
  );
}
