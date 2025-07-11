import { screen,fireEvent } from '@testing-library/react';
import { CheckboxInput } from './CheckboxInput';
import { renderUi } from '@/tests/utils/renderUi';
import {vi} from 'vitest'

describe('CheckboxInput', () => {
  it('renders without crashing', () => {
    renderUi(<CheckboxInput aria-label="accept" />);
    const checkbox = screen.getByRole('checkbox', { name: /accept/i });
    expect(checkbox).toBeInTheDocument();
  });

  it('should be unchecked by default', () => {
    renderUi(<CheckboxInput aria-label="unchecked" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('should be checked if defaultChecked is true', () => {
    renderUi(<CheckboxInput aria-label="default checked" defaultChecked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('calls onCheckedChange when clicked', async () => {
    const onCheckedChange = vi.fn();

    renderUi(<CheckboxInput aria-label="click" onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    renderUi(<CheckboxInput aria-label="disabled" disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });
});