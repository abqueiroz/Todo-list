import * as ProgressPrimitive from '@radix-ui/react-progress';
import styled from 'styled-components';

export const ProgressRoot = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.progressBackground};
  border-radius: 999px;
  width: 100%;
  height: 12px;
`;

export const ProgressIndicator = styled(ProgressPrimitive.Indicator)`
  background-color: ${({ theme }) => theme.colors.progressFill};
  width: 0%;
  height: 100%;
  transition: width 0.8s ease-in-out;
`;