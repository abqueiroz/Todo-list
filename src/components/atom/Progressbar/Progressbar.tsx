// ProgressBar.tsx
import * as Styled from './Progressbar.styled'

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <Styled.ProgressRoot value={value} >
      <Styled.ProgressIndicator style={{ width: `${value}%` }} />
    </Styled.ProgressRoot>
  );
}