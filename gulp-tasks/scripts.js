const {dest, src} = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');

// File Path Variables
const files = {
  jsInput: 'src/_includes/resources/js/*.js',
  jsOutput: 'dist/assets/js',
}

function scripts() {
  return src( files.jsInput )
    .pipe( babel({
      presets: ['@babel/env']
    }) )
    .pipe( terser() )
    .pipe( dest(files.jsOutput) )
}

module.exports = scripts;
