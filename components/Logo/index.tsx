import React from 'react';
import * as Styled from './styles';
import projectConfig from '@/project.config';

export const Logo = (): JSX.Element => (
	<Styled.Logo>
		<span>{projectConfig.name}</span>
	</Styled.Logo>
);

export default Logo;
