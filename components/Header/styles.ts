import styled from "styled-components";
import type { StyledProps } from "./types";

export const Header = styled.header<StyledProps>`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	transition-duration: 150ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: height, box-shadow, background-color;
	will-change: height, box-shadow, background-color;
	height: 6rem;
	box-shadow: none;
	background-color: transparent;

	${({ scrolled, theme }) =>
		scrolled
			? `
			height: 4rem;
			box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
			background-color: ${theme.colors.primary[100]};
			`
			: `
			height: 6rem;
			box-shadow: none;
			background-color: transparent;
	`}
`;
