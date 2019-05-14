const gulp = require('gulp');
const sass = require('gulp-sass');
const image = require('gulp-image');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('image', function () {
    gulp.src('./src/img/*')
        .pipe(image())
        .pipe(gulp.dest('./build/img'));
});

gulp.task('sass', function () {
    return gulp.src('public/styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/styles/css'));
});


gulp.task('fonts', function () {
    return gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./build/fonts'))
});

gulp.task('watch', ['sass', 'image', 'fonts'], function () {
    gulp.watch('public/styles/sass/*.scss', ['sass']);
    gulp.watch('img/*', ['image']);
    gulp.watch('fonts/*', ['fonts']);
});

gulp.task('default', ['watch', 'fonts', 'image']);