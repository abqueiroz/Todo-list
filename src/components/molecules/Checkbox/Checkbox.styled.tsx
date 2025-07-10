import styled from "styled-components";
import { Typography } from "../../atom";

export const Container = styled.div`
display: flex;
width: fit-content;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const Label = styled(Typography)`
    user-select: none;

`