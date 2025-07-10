import styled from "styled-components";

export const MainPageTemplate = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  height: 80vh;
  padding: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
`;
