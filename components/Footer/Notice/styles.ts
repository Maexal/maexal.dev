import dynamic from "next/dynamic";
import styled from "styled-components";
import { Container as GlobalContainer, device } from "@/styles";

const ComponentLink = dynamic(() => import("@/components/Link"));

export const Container = styled(GlobalContainer)`
	margin-left: auto;
	margin-right: auto;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 2rem;
	padding-bottom: 2rem;

	@media ${device.tablet} {
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 1.5rem;
	margin-top: 1.5rem;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: ${({ theme }) => theme.colors.gray[200]};

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

export const Copyright = styled.p`
	margin-bottom: 1.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	text-align: left;
	color: ${({ theme }) => theme.colors.gray[600]};

	@media ${device.tablet} {
		margin-bottom: 0;
	}
`;

export const Links = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	> * + * {
		margin-right: 1.5rem;
		margin-left: 1.5rem;
	}

	@media ${device.tablet} {
		justify-content: center;
		align-items: center;
	}
`;

export const Link = styled(ComponentLink)`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.colors.gray[600]};
`;
