import { renderUi } from "@/tests/utils/renderUi";
import { theme } from "@/theme";
import { Button } from "./Button";
import { screen } from '@testing-library/react';

describe('Button', () => {
  it('renders with default variant (primary) and regular size', () => {
    renderUi(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      border: none;
    `);
    expect(button).toHaveStyle(`
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes.body};
    `);
  });

  it('renders with primary variant', () => {
    renderUi(<Button $variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button', { name: /primary button/i });

    expect(button).toHaveStyle(`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
    `);
  });

  it('renders with secondary variant', () => {
    renderUi(<Button $variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });

    expect(button).toHaveStyle(`
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    `);
  });

  it('renders with tertiary variant', () => {
    renderUi(<Button $variant="tertiary">Tertiary Button</Button>);
    const button = screen.getByRole('button', { name: /tertiary button/i });

    expect(button).toHaveStyle(`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.text};
    `);
  });

  it('renders with alert variant', () => {
    renderUi(<Button $variant="alert">Alert Button</Button>);
    const button = screen.getByRole('button', { name: /alert button/i });

    expect(button).toHaveStyle(`
      color: ${theme.colors.alert};
      border: 1px solid ${theme.colors.alert};
    `);
  });

  it('renders with small size', () => {
    renderUi(<Button $size="small">Small Button</Button>);
    const button = screen.getByRole('button', { name: /small button/i });

    expect(button).toHaveStyle(`
      font-family: ${theme.fonts.mono};
      font-size: ${theme.fontSizes.caption};
    `);
  });

  it('renders with large size', () => {
    renderUi(<Button $size="large">Large Button</Button>);
    const button = screen.getByRole('button', { name: /large button/i });

    expect(button).toHaveStyle(`
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes.heading};
    `);
  });

  it('renders with regular size', () => {
    renderUi(<Button $size="regular">Regular Button</Button>);
    const button = screen.getByRole('button', { name: /regular button/i });

    // Regular size uses default body font and font size
    expect(button).toHaveStyle(`
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes.body};
    `);
  });

  it('is disabled when the disabled prop is true', () => {
    renderUi(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /disabled button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.5;');
    expect(button).toHaveStyle('cursor: not-allowed;');
  });

  it('applies focus styles correctly', () => {
    renderUi(<Button>Focus Me</Button>);
    const button = screen.getByRole('button', { name: /focus me/i });

    button.focus();
    expect(button).toHaveFocus();

  });
});






