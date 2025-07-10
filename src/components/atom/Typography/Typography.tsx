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
