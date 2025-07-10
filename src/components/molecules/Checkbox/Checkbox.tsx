import { CheckboxInput } from '../../atom'
import type { CheckboxInputProps } from '../../atom'

import * as Styled from './Checkbox.styled'

interface CheckboxProps extends Omit<CheckboxInputProps, 'id'> {
    $label: string
    id: string
}

export function Checkbox(props: CheckboxProps) {
    const { $label, id, ...rest } = props
    return (
        <>
            <Styled.Container>
                <CheckboxInput id={id} {...rest} />
                <Styled.Label htmlFor={id} $as='label' id={`label-${id}`}>
                    {$label}
                </Styled.Label>
            </Styled.Container>
        </>)
}