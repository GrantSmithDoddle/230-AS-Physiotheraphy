const {parallel, series, watch} = require('gulp');

// Proxy server
const proxy = 'http://asphysiotherapy.local/';

// Pull in each task
const styles = require('./gulp-tasks/scss.js');
const scripts = require('./gulp-tasks/scripts.js');
const images = require('./gulp-tasks/images.js');

// File path variables
const files = {
  watchScss: 'src/_includes/resources/scss/**/*.scss',
  watchJs: 'src/_includes/resources/js/**/*.js',
  watchImg: 'src/_includes/resources/**/*'
};

function watcher() {
  watch(files.watchScss, styles);
  watch(files.watchJs, scripts);
  watch(files.watchImg, images);
};

// The default (if someone just runs `gulp`) is to run each task in parallel
exports.default = series(
  parallel(styles, scripts, images), watcher
);
