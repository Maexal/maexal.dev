import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AnimatePresence, AnimationFeature, ExitFeature, m as motion, MotionConfig, MotionProps } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import type { State } from '@/types';
import { themes, ResetStyles, ToastifyStyles, SwalStyles, GlobalStyles } from '@/styles';
import { getTheme } from '@/utils';

const Header = dynamic(() => import('@/components/Header'));

const motionProps: MotionProps = {
	initial: 'pageInitial',
	animate: 'pageAnimate',
	exit: 'pageExit',
	variants: {
		pageInitial: {
			opacity: 0,
		},
		pageAnimate: {
			opacity: 1,
		},
		pageExit: {
			opacity: 0,
		},
	},
	transition: {
		duration: 0.15,
		ease: 'easeInOut',
	},
};

export const Page = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const appState = useSelector((state: State) => state.app);
	const { route } = useRouter();

	return (
		<ThemeProvider theme={getTheme(appState.theme) === 'dark' ? themes.darkTheme : themes.lightTheme}>
			<ResetStyles />
			<GlobalStyles />
			<ToastifyStyles />
			<SwalStyles />

			<Header />
			<MotionConfig features={[AnimationFeature, ExitFeature]}>
				<AnimatePresence exitBeforeEnter>
					<motion.div key={route} {...motionProps}>
						{children}
					</motion.div>
				</AnimatePresence>
			</MotionConfig>
		</ThemeProvider>
	);
};

export default Page;
