const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

const production = process.env.NODE_ENV === "production";

module.exports = new NextI18Next({
	otherLanguages: ["en", "nl"],
	localeSubpaths,
	localePath: production ? path.resolve("./out_publish/static/locales") : path.resolve("./public/static/locales"),
});
