import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'alert';

interface ButtonProps {
  $variant?: Variant;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.base};
  cursor: pointer;
  transition: background-color 0.4s ease;

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
        case 'alert':
        return css`
          color: ${theme.colors.alert};
          background-color: transparent;
          border: 1px solid ${theme.colors.alert};

          &:hover {
            background-color: ${theme.colors.alert}20;
          }
        `;

      case 'tertiary':
        return css`
          color: ${theme.colors.text};
          background-color: ${theme.colors.background};
          border: 1px solid ${theme.colors.text };

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
