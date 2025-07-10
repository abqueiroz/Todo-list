import { CheckboxInput, Typography } from '../../atom'
import type { CheckboxInputProps } from '../../atom'

import * as Styled from './Checkbox.styled'

export interface CheckboxProps extends Omit<CheckboxInputProps, 'id'> {
    $label: string
    id: string
}
/**
 * Checkbox component with a label.
 * 
 * Renders a styled checkbox input paired with a label that visually updates based on the checked state.
 * The label text is shown with a line-through style when the checkbox is checked.
 * 
 * @param id - Unique identifier for the checkbox and label association.
 * @param $label - Text displayed as the checkbox label.
 * @param checked - Controls the checked state of the checkbox.
 * @param [...] - Other props passed down to the underlying CheckboxInput, except 'id'.
 */

export function Checkbox(props: CheckboxProps) {
    const { $label, id, checked, ...rest } = props
    return (
        <>
            <Styled.Container>
                <CheckboxInput id={id} {...rest} />
                <Typography htmlFor={id} $as='label' id={`label-${id}`}
                    $color={checked ? 'lightText' : 'text'}
                    style={{
                        textDecoration: checked ? 'line-through' : 'none',
                        userSelect: 'none'
                    }}>
                    {$label}
                </Typography>
            </Styled.Container>
        </>)
}