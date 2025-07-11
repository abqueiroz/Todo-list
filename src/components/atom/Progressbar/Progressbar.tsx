import * as Styled from './Progressbar.styled'

interface ProgressBarProps {
  value: number;
  id?:string
}
/**
 * Props available for the ProgressBar component.
 * 
 * @param value - A number between 0 and 100 that represents the progress percentage.
 */
export function ProgressBar({ value,id }: ProgressBarProps) {
  return (
    <Styled.ProgressRoot value={value} >
      <Styled.ProgressIndicator id={id} data-testid={`${id}-test-id`} style={{ width: `${value}%` }} />
    </Styled.ProgressRoot>
  );
}