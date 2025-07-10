import styled from 'styled-components';

/**
 * Props available for the styled TextInput component.
 * 
 * @param [placeholder] - Placeholder text displayed when input is empty.
 * @param [value] - The current value of the input.
 * @param [onChange] - Callback fired when the input value changes.
 * @param [disabled] - When true, disables the input.
 * @param [...] - Inherits all other native input props.
 */
export const TextInput = styled.input`
  display: flex;
  height: 1.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }

  &:focus {
    outline:1px solid;
    outline-color: ${({ theme }) => theme.colors.secondary};
    outline-offset: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryHover}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;