import { screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import userEvent from '@testing-library/user-event';
import { renderUi } from '@/tests/utils/renderUi';
import { vi } from 'vitest'

describe('Checkbox', () => {
    it('renders with given label', () => {
        renderUi(<Checkbox id="task-1" $label="Accept terms" />);
        expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });

    it('associates label with input via id/htmlFor', () => {
        renderUi(<Checkbox id="my-checkbox" $label="Label text" />);
        const input = screen.getByRole('checkbox');
        const label = screen.getByText('Label text');
        expect(label).toHaveAttribute('for', 'my-checkbox');
        expect(input).toHaveAttribute('id', 'my-checkbox');
    });

    it('applies line-through when checked is true', () => {
        renderUi(<Checkbox id="c1" $label="Checked item" checked />);
        const label = screen.getByText('Checked item');
        expect(label).toHaveStyle('text-decoration: line-through');
    });

    it('does not apply line-through when not checked', () => {
        renderUi(<Checkbox id="c2" $label="Unchecked item" checked={false} />);
        const label = screen.getByText('Unchecked item');
        expect(label).toHaveStyle('text-decoration: none');
    });

    it('calls onCheckedChange when clicked', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        renderUi(
            <Checkbox
                id="checkbox"
                $label="Toggle me"
                onCheckedChange={handleChange}
            />
        );

        const input = screen.getByRole('checkbox');
        await user.click(input);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
