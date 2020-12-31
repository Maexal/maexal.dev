import React from "react";
import Particles, { IParticlesParams } from "react-particles-js";
import { projectConfig } from "@/project.config";

export const ParticlesBackground = ({
	bouncing = false,
	hide = false,
}: {
	bouncing?: boolean;
	hide?: boolean;
}): JSX.Element => {
	const { particles } = projectConfig;

	const params: IParticlesParams = {
		...particles,
		particles: {
			...particles.particles,
			move: {
				...particles.particles.move,
				outMode: bouncing ? "bounce" : "out",
			},
		},
	};

	return (
		<Particles
			className={`fixed inset-0 w-screen h-screen duration-150 ease-in-out opacity-100 z-n10 pointer-events-none${
				hide ? ` opacity-0` : ``
			}`}
			canvasClassName="w-auto h-auto"
			params={params}
		/>
	);
};

export default ParticlesBackground;
