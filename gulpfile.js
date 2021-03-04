const { task, watch, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('sass');

function sassBuild() {
	return src('./assets/scss/*.scss')
		// .pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./assets/css'));
}

function sassWatch() {
	return watch('./assets/scss/*.scss', sassBuild);
}

function sassBuildChart() {
	// return src('./assets/vendor/chart/*.scss')
	// 	.pipe(sourcemaps.init())
	// 	.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
	// 	.pipe(sourcemaps.write('.'))
	// 	.pipe(dest('./assets/vendor/chart'));
}

function sassWatchChart() {
	// return watch('./assets/vendor/chart/*.scss', sassBuildChart);
}

// function jsBuild() {
// 	return src('./assets/js/*.js')
// 		.pipe(babel({
// 			presets: ['@babel/env']
// 		}))
// 		.pipe(dest('./assets/js/dist'))
// }

// function jsUglify() {
// 	return src('./assets/js/*.js')
// 		.pipe(sourcemaps.init())
// 		.pipe(babel({
// 			presets: ['@babel/env']
// 		}))
// 		.pipe(uglify())
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(dest('./assets/js/dist'))
// }

// function jsWatch() {
// 	return watch('./assets/js/*.js', jsBuild);
// }

// Gulp Task to watch changes on sass + js files, for development
task('watch', sassWatch);

// Gulp Task to build sass + js files, for production
task('build', sassBuild);
