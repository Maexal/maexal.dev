// Load Gulp
const { src, dest, task, series, watch } = require("gulp");

// CSS related plugins
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");
const postcssCustomProperties = require("postcss-custom-properties");

// JS related plugins
const uglify = require("gulp-uglify");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const stripDebug = require("gulp-strip-debug");

// Utility plugins
const rename = require("gulp-rename");
const options = require("gulp-options");
const gulpif = require("gulp-if");
const cachebust = require("gulp-cache-bust");

task("build", done => {
	src(["./src/scss/style.scss"])
		.pipe(
			sass({
				outputStyle: "compressed",
			})
		)
		.pipe(postcss([postcssCustomProperties()]))
		.pipe(autoprefixer())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("./dist/css"));

	["main.js"].map(entry =>
		browserify({
			entries: ["./src/js/" + entry],
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
			.pipe(dest("./dist/js"))
	);

	src(["./src/.htaccess"]).pipe(dest("./dist/"));

	src("./src/index.html")
		.pipe(cachebust({ type: "timestamp" }))
		.pipe(dest("./dist"));

	done();
});

task("watch", () => {
	watch("./src/**/*", series("build"));
});
