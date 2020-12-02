const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

async function generateSiteMap() {
	const pages = await globby(["pages/**/*.tsx", "!pages/_*.tsx", "!pages/**/[id].tsx", "!pages/api", "posts/*.md"]);
	const date = new Date().toISOString();
	const url = "https://maexal.dev";

	const sitemap = `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${pages
			.map(page => {
				const path = page.replace("pages", "").replace(".tsx", "");
				const route = path === "/index" ? "" : path;
				return `
					<url>
						<loc>${`${url}${route}/`}</loc>
						<lastmod>${date}</lastmod>
					</url>
					<url>
						<loc>${`${url}/en${route}/`}</loc>
						<lastmod>${date}</lastmod>
					</url>
					<url>
						<loc>${`${url}/nl${route}/`}</loc>
						<lastmod>${date}</lastmod>
					</url>`;
			})
			.join("")}
	</urlset>
	`;

	const formattedSitemap = formatted(sitemap);

	fs.writeFileSync("public/sitemap.xml", formattedSitemap);
}

generateSiteMap();
