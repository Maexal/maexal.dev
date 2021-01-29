import { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps, StyledButtonProps {
	children?: React.ReactNode;
	type?: "normal" | "navigation-link" | "navigation-button" | "button" | "button-function" | "button-link";
	target?: "_blank";
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface StyledButtonProps {
	color?: "orange" | "blue";
	elevation?: "flat" | "hovering" | "flying";
	disabled?: boolean;
}
