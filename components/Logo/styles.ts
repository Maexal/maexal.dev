import styled from 'styled-components';

export const Logo = styled.div`
	--logo-width: 375px;
	--logo-height: 95px;
	--logo-interactive-jump: 3px;
	--size: 0.4;
	--width: calc(var(--logo-width) * var(--size));
	--height: calc(var(--logo-height) * var(--size));
	--jump: calc(var(--logo-interactive-jump) * var(--size));
	--pos-0: translate(calc(var(--jump) * -1), calc(var(--jump) * 1));
	--pos-1: translate(calc(var(--jump) * 1), calc(var(--jump) * -1));
	--pos-2: translate(calc(var(--jump) * 3), calc(var(--jump) * -3));

	position: relative;
	user-select: none;
	outline: none;
	z-index: 1;
	color: transparent;
	font-size: 0px;
	width: var(--width);
	height: var(--height);

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background-repeat: no-repeat;
		background-position: center;
		height: var(--height);
		width: var(--width);
		background-size: var(--width) var(--height);
	}

	&::before {
		background-image: url('/assets/vectors/logo-outline-only-blue.svg');
		z-index: -2;
		transform: var(--pos-0);
	}

	&::after {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		background-image: url('/assets/vectors/logo-filled-only-blue.svg');
		z-index: -1;
		transform: var(--pos-1);
		will-change: transform;
	}

	&:hover {
		&::after {
			transform: var(--pos-2);
		}
	}

	&:active,
	&:focus {
		&::after {
			transform: var(--pos-0);
		}
	}

	&:focus-visible {
		box-shadow: 0 0 0 0 #ffffff, 0 0 0 calc(3px + 0) ${({ theme }) => theme.colors.primary.DEFAULT}, 0 0 transparent;
	}

	> span {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
`;
