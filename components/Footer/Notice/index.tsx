import React from "react";
import { useI18n } from "next-localization";
import projectConfig from "@/project.config";
import * as Styled from "./styles";

export const FooterNotice = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const { name, startYear } = projectConfig;

	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.Copyright>
					&copy; Copyright {startYear}-{new Date().getFullYear()} {name}. {t("phrases.all-rights-reserved")}.
				</Styled.Copyright>
				<Styled.Links>
					<Styled.Link href={t("navigation.terms-and-conditions.url")}>
						{t("navigation.terms-and-conditions.capitalized-name")}
					</Styled.Link>
					<Styled.Link href={t("navigation.privacy-policy.url")}>
						{t("navigation.privacy-policy.capitalized-name")}
					</Styled.Link>
				</Styled.Links>
			</Styled.Wrapper>
		</Styled.Container>
	);
};
