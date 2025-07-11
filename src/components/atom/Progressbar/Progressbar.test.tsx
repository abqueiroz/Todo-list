import { renderUi } from '@/tests/utils/renderUi';
import { screen } from '@testing-library/react';
import { ProgressBar } from './Progressbar';

describe('ProgressBar', () => {
  it('renders without crashing', () => {
    renderUi(<ProgressBar id='progress' value={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
  });

  it('sets correct width based on value prop', () => {
    renderUi(<ProgressBar id='progress' value={75} />);
    const indicator = screen.getByTestId('progress-test-id');
    expect(indicator).toHaveStyle({ width: '75%' });
  });

  it('handles value of 0 correctly', () => {
    renderUi(<ProgressBar id='progress' value={0} />);
    const indicator = screen.getByTestId('progress-test-id');
    expect(indicator).toHaveStyle({ width: '0%' });
  });

  it('handles value of 100 correctly', () => {
    renderUi(<ProgressBar id='progress' value={100} />);
    const indicator = screen.getByTestId('progress-test-id');
    expect(indicator).toHaveStyle({ width: '100%' });
  });
});