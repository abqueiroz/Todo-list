import type { ComponentPropsWithoutRef } from 'react';
import { Root as CheckBoxRoot } from '@radix-ui/react-checkbox';
import * as Styled from './CheckboxInput.styled';

export type CheckboxInputProps = ComponentPropsWithoutRef<typeof CheckBoxRoot>;

/**
 * Props available for the CheckboxInput component.
 * 
 * @param [checked] - Controls whether the checkbox is checked.
 * @param [defaultChecked] - The initial checked state.
 * @param [onCheckedChange] - Callback fired when the checked state changes.
 * @param [disabled] - When true, disables the checkbox.
 * @param [required] - When true, marks the checkbox as required.
 * @param [...] - Inherits all other native props from Radix UI Checkbox Root.
 */
export function CheckboxInput(props: CheckboxInputProps) {
  return (
    <Styled.Checkbox {...props} />
  );
}
