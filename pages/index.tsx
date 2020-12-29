import React from "react";
import { useI18n } from "next-localization";

import { Footer, Head, Header, Link, Main, ParticlesBackground } from "../components";
import projectConfig from "../project.config";

const HomePage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const {
		name,
		abstract,
		email: { general },
	} = projectConfig;

	return (
		<>
			<Head title={`${name}: ${abstract}`} useTitleTemplate={false} />

			<Main className="home">
				<section id="hero">
					<div className="hero-container">
						<div className="hero-wrapper">
							<h1>
								All the <span>expected results</span> of your future online product met.
							</h1>
							<p>This is what we guarantee you here at Maexal.</p>
							<div>
								<Link type="button" href={`mailto:${general}`} margin elevation="hovering">
									{t("phrases.contact-us")}
								</Link>

								<Link type="button" href="/#about" margin color="blue">
									{t("phrases.get-to-know-us")}
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Main>

			<Footer />
		</>
	);
};

export default HomePage;
