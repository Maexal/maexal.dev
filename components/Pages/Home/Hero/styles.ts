import styled from 'styled-components';

import { Container as GlobalContainer } from '@/styles';

export const Wrapper = styled.section`
	position: relative;
	background: transparent;
	padding-top: 6rem;
	height: calc(100vh - 6rem);

	&::after {
		content: '';
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4rem;
		/* background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.gray[100]}); */
	}
`;

export const Container = styled(GlobalContainer)`
	height: 100%;
	padding: 6rem 1rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
