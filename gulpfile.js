const {parallel, series, watch} = require('gulp');

// Proxy server
const proxy = 'http://asphysiotherapy.local/';

// Default paths
global.source = './src/_assets';
global.output = './src/_includes/assets';

global.scss = '/scss';
global.css = '/css';
global.js = '/js';
global.img= '/img';

// Pull in each task
const styles = require('./gulp-tasks/scss.js');
const scripts = require('./gulp-tasks/scripts.js');
const images = require('./gulp-tasks/images.js');

// Watch Task
function watcher() {
  watch( source + scss + '/**/*.scss', styles.scssCompile );
  watch( source + js + '/**/*.js', scripts.jsCompile );
}

// The default (if someone just runs `gulp`) is to run each task in parallel
exports.default = series(
  parallel(styles.scssCompile, scripts.jsCompile), watcher
);

// Production task, build project without watching after process
exports.production = series(
  parallel(styles.scssCompile, scripts.jsCompile, images.condense, images.webp)
);

// Image optimisation task
exports.images = series(
  parallel( images.condense, images.webp, styles.scssCompile ),
);
