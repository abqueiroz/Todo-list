import styled from "styled-components";

export const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: space-between;
`;
