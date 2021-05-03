import React from 'react';

import { projectConfig } from '@/project.config';

import * as Styled from './styles';

export const Logo = (): JSX.Element => (
	<Styled.Logo>
		<span>{projectConfig.name}</span>
	</Styled.Logo>
);

export default Logo;
