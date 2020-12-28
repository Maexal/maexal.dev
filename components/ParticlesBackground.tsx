import React from "react";
import Particles, { IParticlesParams } from "react-particles-js";
import { projectConfig } from "../project.config";

export const ParticlesBackground = ({ bouncing = false }: { bouncing?: boolean }): JSX.Element => {
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

	return <Particles className="particles" canvasClassName="particles-canvas" params={params} />;
};

export default ParticlesBackground;
