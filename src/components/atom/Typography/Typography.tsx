import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import type { ColorKeys, SizeKeys } from './Typography.styled';
import { StyledTypography } from './Typography.styled';

type TypographyProps<T extends ElementType> = {
  $as?: T;
  $color?: ColorKeys;
  children?: ReactNode;
  $size?: SizeKeys
  $isBold?: boolean
} & ComponentPropsWithoutRef<T>;

/**
 * Props available for the Typography component.
 * 
 * @param [$as] - Defines which HTML element or component to render (e.g., 'p', 'span', 'h1').
 * @param [$color] - Text color based on theme keys.
 * @param [$size] - Font size based on theme size keys.
 * @param [$isBold] - If true, applies bold font weight.
 * @param [children] - Text or elements to render inside the component.
 * @param [...] - Inherits all other native props from the selected element.
 */
export function Typography<T extends ElementType = 'p'>({
  $as,
  $color,
  $size,
  $isBold,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = $as || 'p';
  return (
    <StyledTypography as={Component} $size={$size} $color={$color} $isBold={$isBold} {...rest}>
      {children}
    </StyledTypography>
  );
}
