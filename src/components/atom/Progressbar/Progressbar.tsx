import * as Styled from './Progressbar.styled'

interface ProgressBarProps {
  value: number;
}
/**
 * Props available for the ProgressBar component.
 * 
 * @param value - A number between 0 and 100 that represents the progress percentage.
 */
export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <Styled.ProgressRoot value={value} >
      <Styled.ProgressIndicator style={{ width: `${value}%` }} />
    </Styled.ProgressRoot>
  );
}