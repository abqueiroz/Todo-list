import { screen } from '@testing-library/react';
import { Typography } from './Typography';
import { theme } from '@/theme';
import { renderUi } from '@/tests/utils/renderUi';

describe('Typography', () => {
    it('renders with default tag and styles', () => {
        renderUi(<Typography>Default</Typography>);
        const text = screen.getByText('Default');

        expect(text.tagName.toLowerCase()).toBe('p');
        expect(text).toHaveStyle(`color: ${theme.colors.text}`);
        expect(text).toHaveStyle(`font-size: ${theme.fontSizes.body}`);
        expect(text).toHaveStyle(`font-weight: normal`);
    });

    it('renders as custom tag via $as', () => {
        renderUi(<Typography $as="h2">Heading</Typography>);
        const text = screen.getByText('Heading');
        expect(text.tagName.toLowerCase()).toBe('h2');
    });

    it('applies correct color via $color', () => {
        renderUi(<Typography $color="alert">Alert</Typography>);
        const text = screen.getByText('Alert');
        expect(text).toHaveStyle(`color: ${theme.colors.alert}`);
    });

    it('applies correct font-size via $size', () => {
        renderUi(<Typography $size="heading">Heading</Typography>);
        const heading = screen.getByText('Heading');
        expect(heading).toHaveStyle(`font-size: ${theme.fontSizes.heading}`);

        renderUi(<Typography $size="caption">Caption</Typography>);
        const caption = screen.getByText('Caption');
        expect(caption).toHaveStyle(`font-size: ${theme.fontSizes.caption}`);
    });

    it('applies bold when $isBold is true', () => {
        renderUi(<Typography $isBold>Bold</Typography>);
        const bold = screen.getByText('Bold');
        expect(bold).toHaveStyle('font-weight: bold');
    });
});
