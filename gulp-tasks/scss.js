const {dest, src} = require('gulp');
const postCss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const autopreFixer = require('autoprefixer');
const cssNano = require('cssnano');

// File Path Variables
const files = {
  scssInput: 'src/_includes/resources/scss/*.scss',
  scssOutput: 'dist/assets/css',
}

function styles() {
  var plugins = [
    autopreFixer(),
    cssNano()
  ];
  return src( files.scssInput )
    .pipe( sourceMaps.init() )
    .pipe( sass() )
    .pipe( postCss(plugins) )
    .pipe( sourceMaps.write('.') )
    .pipe( dest(files.scssOutput) )
}

module.exports = styles;
