const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');

gulp.task('scss', function () {
  return gulp.src([
      './src/app/scss/style.scss', // Добавляем style.scss в начало
      './src/app/scss/*.scss' // Затем все остальные .scss файлы
    ])
    .pipe(concat("style.scss")) // Можно убрать, так как style.scss уже в начале
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/app/css'));
});
gulp.task('watch', function () {
  gulp.watch('./src/app/scss/*.scss', gulp.series('scss',));
});

gulp.task('default', gulp.series('scss', 'watch'));

