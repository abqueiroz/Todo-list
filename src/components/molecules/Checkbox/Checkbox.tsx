import { CheckboxInput, Typography } from '../../atom'
import type { CheckboxInputProps } from '../../atom'

import * as Styled from './Checkbox.styled'

export interface CheckboxProps extends Omit<CheckboxInputProps, 'id'> {
    $label: string
    id: string
}

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