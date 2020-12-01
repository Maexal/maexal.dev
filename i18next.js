const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
	defaultLanguage: "en",
	otherLanguages: ["nl"],
	localeSubpaths,
	localePath: path.resolve(`./${process.env.I18N_LOCALES_PATH ?? "public/static/locales"}`),
});
