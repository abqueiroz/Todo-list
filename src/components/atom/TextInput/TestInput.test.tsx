import { screen } from '@testing-library/react';
import { TextInput } from './TextInput';
import {vi} from 'vitest'
import { renderUi } from '@/tests/utils/renderUi';
import userEvent from '@testing-library/user-event';

describe('TextInput', () => {
  it('renders with placeholder', () => {
    renderUi(<TextInput placeholder="Type here" />);
    expect(screen.getByPlaceholderText(/type here/i)).toBeInTheDocument();
  });

  it('accepts and updates value', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    renderUi(
      <TextInput placeholder="email" value="abc" onChange={handleChange} />
    );
    
    const input = screen.getByPlaceholderText(/email/i);
    expect(input).toHaveValue('abc');

    await user.type(input, 'd'); // simulate typing 'd'
    expect(handleChange).toHaveBeenCalled(); // controlled input
  });

  it('can be disabled', () => {
    renderUi(<TextInput placeholder="disabled" disabled />);
    const input = screen.getByPlaceholderText(/disabled/i);
    expect(input).toBeDisabled();
  });

  it('can receive focus', async () => {
    const user = userEvent.setup();
    renderUi(<TextInput placeholder="focus" />);
    const input = screen.getByPlaceholderText(/focus/i);
    await user.click(input);
    expect(input).toHaveFocus();
  });
});
