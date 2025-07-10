import styled from "styled-components";

export const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 75%;
  overflow-y: auto;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
display: inline-flex;
gap: 1rem;
`
