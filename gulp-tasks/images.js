const {dest, src} = require('gulp');

// Lossy reduce image size and minify
const image = require('gulp-image');
function imageOpt() {
    return src( source + img + '/**/*' )
        .pipe( image() )
        .pipe( dest( output + img ) )
}


// Convert applicable image files to webp format
const webp = require('gulp-webp');
function createWebp() {
    return src( source + img + '/**/*')
        .pipe( webp() )
        .pipe( dest( output + img ) )
}

module.exports.condense = imageOpt;
module.exports.webp = createWebp;
