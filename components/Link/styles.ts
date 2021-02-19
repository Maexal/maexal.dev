import styled from 'styled-components';
import type { StyledProps } from './types';

export const Link = styled.a`
	cursor: pointer;
	outline: none;
	border-radius: 0.25rem;
	text-decoration: underline;
`;

export const NavigationLink = styled(Link)`
	text-decoration: none;
	user-select: none;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: 0.5rem;
	font-family: ${({ theme }) => theme.fonts.mono};
	transition-duration: 150ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: padding;
	will-change: padding;

	&::before,
	&::after {
		opacity: 0.5;
		font-size: 0.875rem;
		line-height: 1.25rem;
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-property: padding;
		will-change: padding;
	}

	&::before {
		content: '<';
	}
	&::after {
		content: '/>';
	}

	&:hover {
		padding-left: 0.25rem;
		padding-right: 0.25rem;

		&::before {
			padding-right: 0.5rem;
		}
		&::after {
			padding-left: 0.5rem;
		}
	}

	&:active {
		padding-left: 0.5rem;
		padding-right: 0.5rem;

		&::before {
			padding-right: 0.25rem;
		}
		&::after {
			padding-left: 0.25rem;
		}
	}
`;

export const Button = styled.a<StyledProps>`
	--color: ${({ color, theme }) => (color === 'blue' ? theme.colors.primary.DEFAULT : theme.colors.secondary.DEFAULT)};

	position: relative;
	display: inline-block;
	cursor: pointer;
	appearance: none;
	outline: none;
	user-select: none;
	text-decoration: none;
	border: none;
	border-radius: 0.125rem;
	width: auto;
	text-align: center;
	color: #ffffff;
	background: transparent;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;

	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 0.125rem;
		box-shadow: 0 0 0 1px var(--color);
	}

	&::before {
		z-index: 0;
		background-color: var(--color);
	}

	&::after {
		z-index: 1;
	}

	> span {
		position: relative;
		display: inline-block;
		color: white;
		font-size: 1rem;
		line-height: 1.5rem;
		z-index: 1;
		font-family: ${({ theme }) => theme.fonts.mono};
	}

	&::before,
	&::after,
	> span {
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-property: transform;
		will-change: transform;
	}

	&::before,
	> span {
		transform: ${({ elevation }) =>
			elevation === 'flying'
				? `translate(0.5rem, -0.5rem)`
				: elevation === 'hovering'
				? `translate(0.25rem, -0.25rem)`
				: `translate(0, 0)`};
	}

	&:hover {
		&::before,
		> span {
			transform: ${({ elevation }) =>
				elevation === 'flying'
					? `translate(0.25rem, -0.25rem)`
					: elevation === 'hovering'
					? `translate(0.5rem, -0.5rem)`
					: `translate(0.25rem, -0.25rem)`};
		}
	}

	&:active {
		&::before,
		> span {
			transform: translate(0, 0);
		}
	}

	&[disabled] {
		pointer-events: none;
	}
`;

export const ButtonFunction = styled(Button)`
	> span::after {
		content: '()';
		opacity: 0.5;
		font-family: ${({ theme }) => theme.fonts.mono};
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
`;
