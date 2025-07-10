import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  $variant?: Variant;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.base};
  cursor: pointer;
  transition: background-color 0.4s ease, outline-offset 100ms linear;

  &:focus{
    outline:1px solid;
    outline-color: ${({ theme }) => theme.colors.secondary};
    outline-offset: 1px;
  }


  ${({ theme, $variant = 'primary' }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          color: ${theme.colors.primary};
          background-color: transparent;
          border: 1px solid ${theme.colors.primary};

          &:hover {
            background-color: ${theme.colors.primary}20;
          }
        `;

      case 'tertiary':
        return css`
          color: ${theme.colors.backgorund};
          background-color: ${theme.colors.secondary};
          border: 1px solid ${theme.colors.backgorund};

          &:hover {
            text-decoration: underline;
          }
        `;

      case 'primary':
      default:
        return css`
          color: ${theme.colors.secondary};
          background-color: ${theme.colors.primary};
          border: none;

          &:hover {
            background-color: ${theme.colors.primaryHover};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
