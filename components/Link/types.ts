import type { LinkProps } from 'next/link';

export interface Props extends LinkProps, StyledProps {
	children?: React.ReactNode;
	type?: 'normal' | 'navigation-link' | 'navigation-button' | 'button' | 'button-function' | 'button-link';
	target?: '_blank';
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface StyledProps {
	color?: 'orange' | 'blue';
	elevation?: 'flat' | 'hovering' | 'flying';
	disabled?: boolean;
}
