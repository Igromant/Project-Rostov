const {src, dest, watch, task, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};


function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};


exports.serve = bs;



//CssMin
function MinCss() {
    return src("./css/*.css")
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest("./minified"))
};

exports.mincss = MinCss;