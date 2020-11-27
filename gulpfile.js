// Global
const fs = require("fs");

// Load Gulp
const { src, dest, task, series, watch } = require("gulp");

// CSS related plugins
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");

// JS related plugins
const uglify = require("gulp-uglify");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const stripDebug = require("gulp-strip-debug");

// Utility plugins
const minify = require("gulp-minifier");
const rename = require("gulp-rename");
const options = require("gulp-options");
const gulpif = require("gulp-if");
const cachebust = require("gulp-cache-bust");
const realFavicon = require("gulp-real-favicon");
const browserSync = require("browser-sync").create();

// File where the favicon markups are stored
const FAVICON_DATA_FILE = "src/assets/faviconData.json";

task("build", done => {
	buildSite(done);
});

task("watch", () => {
	browserSyncInit();
	buildSite();
	watch("src/**/*", series("build", "browsersync:reload"));
});

task("create-favicons", done => {
	createFavicons(done);
});

task("build:prod", done => {
	buildSite();
	createFavicons(done);
});

task("browsersync:reload", done => {
	browserSync.reload();
	done();
});

const browserSyncInit = () => {
	browserSync.init({
		server: {
			baseDir: "dist",
		},
	});
};

const buildSite = cb => {
	src(["src/scss/index.scss"])
		.pipe(
			sass({
				outputStyle: "compressed",
			})
		)
		.pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
		.pipe(
			minify({
				minify: true,
				minifyCSS: true,
			})
		)
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("dist/css"));

	["index.js"].map(entry =>
		browserify({
			entries: [`src/js/${entry}`],
		})
			.transform(babelify, { presets: ["@babel/preset-env"] })
			.bundle()
			.pipe(source(entry))
			.pipe(
				rename({
					extname: ".min.js",
				})
			)
			.pipe(buffer())
			.pipe(gulpif(options.has("production"), stripDebug()))
			.pipe(uglify())
			.pipe(dest("dist/js"))
	);

	src("src/index.html")
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(cachebust({ type: "timestamp" }))
		.pipe(
			minify({
				minify: true,
				minifyHTML: {
					collapseWhitespace: true,
					conservativeCollapse: true,
				},
			})
		)
		.pipe(dest("dist"));

	try {
		if (cb) cb();
	} catch (e) {
		console.error(e);
	}
};

const createFavicons = cb => {
	realFavicon.generateFavicon(
		{
			masterPicture: "src/assets/icon.png",
			dest: "dist/assets/icons",
			iconsPath: "assets/icons",
			design: {
				ios: {
					pictureAspect: "backgroundAndMargin",
					backgroundColor: "#ffffff",
					margin: "0%",
					assets: {
						ios6AndPriorIcons: true,
						ios7AndLaterIcons: true,
						precomposedIcons: true,
						declareOnlyDefaultIcon: true,
					},
					appName: "Mæxal",
				},
				desktopBrowser: {
					design: "raw",
				},
				windows: {
					pictureAspect: "whiteSilhouette",
					backgroundColor: "#03aaf9",
					onConflict: "override",
					assets: {
						windows80Ie10Tile: true,
						windows10Ie11EdgeTiles: {
							small: true,
							medium: true,
							big: true,
							rectangle: true,
						},
					},
					appName: "Mæxal",
				},
				androidChrome: {
					pictureAspect: "noChange",
					themeColor: "#ffffff",
					manifest: {
						name: "Mæxal",
						startUrl: "https://maexal.dev/",
						display: "standalone",
						orientation: "notSet",
						onConflict: "override",
						declared: true,
					},
					assets: {
						legacyIcon: true,
						lowResolutionIcons: true,
					},
				},
				safariPinnedTab: {
					pictureAspect: "silhouette",
					themeColor: "#03aaf9",
				},
			},
			settings: {
				compression: 5,
				scalingAlgorithm: "Mitchell",
				errorOnImageTooSmall: false,
				readmeFile: false,
				htmlCodeFile: true,
				usePathAsIs: false,
			},
			versioning: {
				paramName: "v",
				paramValue: "1",
			},
			markupFile: FAVICON_DATA_FILE,
		},
		() => {
			cb();
		}
	);
};
