
import styled, { keyframes } from 'styled-components';
import {Root as CheckBoxRoot} from '@radix-ui/react-checkbox';

const ripple = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
`;

export const Checkbox = styled(CheckBoxRoot)`
  all: unset;
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.base};
  cursor: pointer;
  transition: background .5s ease;

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

   &:focus {
    outline:1px solid;
    outline-color: ${({ theme }) => theme.colors.secondary};
    outline-offset: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryHover}40;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  }

  &:active::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.progressBackground};
    border-radius: 50%;
    animation: ${ripple} 0.4s ease-out forwards;
    pointer-events: none;
  }
`;