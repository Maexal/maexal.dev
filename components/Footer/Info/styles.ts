import dynamic from "next/dynamic";
import styled from "styled-components";
import { device } from "@/styles";

const Link = dynamic(() => import("@/components/Link"));

export const Wrapper = styled.div`
	grid-column: span 2 / span 2;

	@media ${device.laptop} {
		grid-column-start: 1;
	}
`;

export const LogoLink = styled(Link)`
	display: inline-flex;
	position: relative;
	justify-content: center;
	align-items: center;
	user-select: none;
	text-decoration: none;
`;

export const Paragraph = styled.p`
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-size: 0.75rem;
	line-height: 1rem;
	line-height: 1.5;
	color: ${({ theme }) => theme.colors.gray[800]};
`;

export const OptionsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(10px, 1fr));
	gap: 1.5rem;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	grid-column: span 1 / span 1;
	color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Span = styled.span`
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 600;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
`;

export const Select = styled.select`
	font-family: ${({ theme }) => theme.fonts.mono};
	border-radius: 0.25rem;
	width: 8.5rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	color: ${({ theme }) => theme.colors.gray[800]};
	background-color: ${({ theme }) => theme.colors.gray[200]};
`;
