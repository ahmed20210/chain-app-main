const concat = require('gulp-concat');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-minify-css');
const minifyhtml = require('gulp-minify-html');
const images = require('gulp-imagemin');
const { series } = require('gulp');
function minifyHtml() {
  return gulp.src('src/*.html')
    .pipe(minifyhtml())
    .pipe(gulp.dest('dist'));
}
function minifyCss() {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
}
function minifyJs() {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
    }
    function imagesMin() {
        return gulp.src('src/images/*')
            .pipe(images())
            .pipe(gulp.dest('dist/images'));
    }
    function watchFiles() {
        gulp.watch('src/css/*.css', minifyCss);
        gulp.watch('src/js/*.js', minifyJs);
        gulp.watch('src/images/*', imagesMin);
        gulp.watch('src/*.html', minifyHtml);
    }
    gulp.task('default', gulp.series(minifyCss, minifyJs, minifyHtml, watchFiles));
    gulp.task('build', gulp.series(minifyCss, minifyJs, imagesMin, minifyHtml));
    gulp.task('watch', watchFiles);
    gulp.task('images', imagesMin);
    gulp.task('html', minifyHtml);
    gulp.task('css', minifyCss);
    gulp.task('js', minifyJs);



    
    