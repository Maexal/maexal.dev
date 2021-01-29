import dynamic from "next/dynamic";
import styled from "styled-components";
import { Container as GlobalContainer } from "@/styles";
import type { StyledProps } from "./types";

const ComponentLink = dynamic(() => import("@/components/Link"));

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
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
			background-color: ${theme.colors.primary[100]};
			`
			: `
			height: 6rem;
			box-shadow: none;
			background-color: transparent;
	`}
`;

export const Container = styled(GlobalContainer)`
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export const Logo = styled(ComponentLink)`
	display: inherit;
	display: inline-flex;
	position: relative;
	justify-content: center;
	align-items: center;
	user-select: none;
	text-decoration: none;
	height: 100%;
`;

export const Navigation = styled.nav`
	margin-left: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	line-height: 1.5rem;
	font-family: ${({ theme }) => theme.fonts.mono};
`;
