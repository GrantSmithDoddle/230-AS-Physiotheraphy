const {dest, src} = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

function scripts() {
  return src( source + js + 'main.js' )
    // Stop the process if an error is thrown.
    .pipe( plumber() )
    // Transpile the JS
    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    // Minify the code
    .pipe( terser() )
    // Change the filename
    .pipe( rename({ extname: '.min.js' }) )
    // Spit out the code
    .pipe( dest( output + js ) )
}

module.exports.jsCompile = scripts;

// Thanks to https://nshki.com/es6-in-gulp-projects/ for their tutorial.
