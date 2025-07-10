import type { ComponentPropsWithoutRef } from 'react';
import { Root as CheckBoxRoot } from '@radix-ui/react-checkbox';
import * as Styled from './CheckboxInput.styled';

export type CheckboxInputProps = ComponentPropsWithoutRef<typeof CheckBoxRoot>;

export function CheckboxInput(props: CheckboxInputProps) {
  return (
    <Styled.Checkbox {...props} />
  );
}
