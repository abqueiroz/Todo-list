import { Typography, ProgressBar, TextInput, Button } from "@/components/atom";
import { TodoList } from "@/components/organisms";
import { MainPageTemplate } from "@/components/template/MainPageTemplate";
import { useTodos } from "@/context/Todo";
import { useState, useMemo } from "react";
import * as Styled from './Home.styled'
export  function Home() {
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
        <Button type="submit" disabled={!inputValue}>Add</Button>
      </Styled.Form>
      <TodoList />
    </MainPageTemplate>
  );
}