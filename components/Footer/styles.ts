import styled from 'styled-components';

import { Link as ComponentLink } from '@/components/Link/styles';
import { Container as GlobalContainer, device } from '@/styles';

import type { StyledProps } from './types';

export const Footer = styled.footer<StyledProps>`
	position: relative;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary[100]};

	${({ shade, theme }) =>
		shade &&
		`
		&::before {
			content: "";
			position: absolute;
			right: 0;
			left: 0;
			top: -4rem;
			height: 4rem;
			background-image: linear-gradient(to bottom, transparent, ${theme.colors.gray[100]};
		}
	`}
`;

export const Container = styled(GlobalContainer)`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0.75rem;
	padding-left: 2rem;
	padding-right: 2rem;
	display: grid;
	grid-template-columns: repeat(2, minmax(10px, 1fr));
	gap: 2.5rem;

	@media ${device.tablet} {
		grid-template-columns: repeat(5, minmax(10px, 1fr));
	}

	@media ${device.laptop} {
		gap: 5rem;
	}
`;

export const Column = styled.nav`
	grid-column: span 1 / span 1;
	display: grid;
	grid-auto-flow: row;

	@media ${device.laptop} {
		grid-column-start: var(--grid-column-start, 1);
	}
`;

export const Paragraph = styled.p`
	margin-bottom: 0.75rem;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 600;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Link = styled(ComponentLink)`
	margin-bottom: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.gray[700]};
	max-width: max-content;
`;
