const {parallel, series, watch} = require('gulp');

// Proxy server
const proxy = 'http://website.local/';

// Set Global Locations
// JS Module
global.gulp_jsInput = './src/_includes/resources/js/*.js';
global.gulp_jsOutput = './dist/assets/js';
// SCSS Module
global.gulp_scssInput = './src/_includes/resources/scss/*.scss';
global.gulp_scssOutput = './dist/assets/css';
// Images Module
global.gulp_imgInput = './src/_includes/resources/img/**/*';
global.gulp_imgOutput = './dist/assets/img';

// Pull in each task
const styles = require('./gulp-tasks/scss.js');
const scripts = require('./gulp-tasks/scripts.js');
const images = require('./gulp-tasks/images.js');

// Watch Task
function watcher() {
  watch( gulp_scssInput, styles );
  watch( gulp_jsInput, scripts );
  watch( gulp_imgInput, images );
};

// The default (if someone just runs `gulp`) is to run each task in parallel
exports.default = series(
  parallel(styles, scripts, images), watcher
);
