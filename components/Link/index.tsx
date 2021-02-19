import React from 'react';
import { default as NextLink } from 'next/link';
import * as Styled from './styles';
import type { Props } from './types';

export const Link = ({
	children,
	type = 'normal',
	elevation = 'hovering',
	color = 'orange',
	disabled = false,
	target,
	onClick,
	...props
}: Props): JSX.Element => {
	switch (type) {
		case 'button-link':
			return (
				<NextLink passHref {...props}>
					<Styled.Button as="a" target={target} color={color} elevation={elevation} disabled={disabled}>
						<span>{children}</span>
					</Styled.Button>
				</NextLink>
			);
		case 'button-function':
			return (
				<Styled.ButtonFunction as="button" color={color} elevation={elevation} disabled={disabled} onClick={onClick}>
					<span>{children}</span>
				</Styled.ButtonFunction>
			);
		case 'button':
			return (
				<Styled.Button as="button" color={color} elevation={elevation} disabled={disabled} onClick={onClick}>
					<span>{children}</span>
				</Styled.Button>
			);
		case 'navigation-link':
			return (
				<NextLink passHref {...props}>
					<Styled.NavigationLink>{children}</Styled.NavigationLink>
				</NextLink>
			);

		case 'navigation-button':
			return (
				<NextLink passHref {...props}>
					<Styled.ButtonFunction color={color} elevation={elevation} disabled={disabled}>
						<span>{children}</span>
					</Styled.ButtonFunction>
				</NextLink>
			);

		case 'normal':
		default:
			return (
				<NextLink passHref {...props}>
					<Styled.Link target={target} rel="noopener noreferrer">
						{children}
					</Styled.Link>
				</NextLink>
			);
	}
};

export default Link;
