import React from "react";
import { useI18n } from "next-localization";

import { Button, Footer, Head, Header, Main } from "../components";
import projectConfig from "../project.config";

const Homepage = (): JSX.Element => {
	const i18n = useI18n();
	const {
		name,
		abstract,
		email: { general },
	} = projectConfig;

	return (
		<>
			<Head title={`${name}: ${abstract}`} useTitleTemplate={false} />

			<Header />

			<Main className="home py-24">
				<section id="hero">
					<div className="hero-wrapper">
						<div className="content">
							<h1>A robot running a business? That looks good.</h1>
							<p>
								Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
								tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
								authentic tumeric truffaut hexagon try-hard chambray.
							</p>
							<div className="buttons">
								<Button href={`mailto:${general}`} elevation="flying">
									{general}
								</Button>
								<Button href={`/#${i18n.t("projects.url")}`} color="blue">
									start getting to know us
								</Button>
							</div>
						</div>
					</div>
				</section>
			</Main>

			<Footer />
		</>
	);
};

export default Homepage;
