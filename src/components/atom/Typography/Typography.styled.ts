import styled from "styled-components";
import type { theme } from "../../../theme";

export type ColorKeys = keyof typeof theme.colors;
export type SizeKeys = keyof typeof theme.fontSizes;

export const StyledTypography = styled.p<{
  $size?: SizeKeys;
  $color?: ColorKeys;
  $isBold?: boolean;
}>`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.text};

  font-size: ${({ $size, theme }) => {
    switch ($size) {
      case "heading":
        return theme.fontSizes.heading;
      case "caption":
        return theme.fontSizes.caption;
      default:
        return theme.fontSizes.body;
    }
  }};

  font-weight: ${({ $isBold }) => ($isBold ? "bold" : "normal")};
`;
