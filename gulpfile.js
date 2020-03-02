const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');

gulp.task('hello', (done)=> {
    console.log('Привет, мир!');
    done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

/* минимизируетм CSS-файлы и добавляем к ним конечный .min.css */
gulp.task('styles', function(done) {
    gulp.src(['./*.css'])
    .pipe(concat('style.min.css'))             /* объединяем CSS-файлы и переименовываем их */
    .pipe(autoprefix('last 2 versions'))       /* указываем текущую и предыдущие версии всех браузеров */
    .pipe(minifyCSS())                         /* минимизируем все CSS-скрипты из папки => копируем в папку сборки */
    .pipe(gulp.dest('css/'));                  /* вызываем метод "dest" с аргументом, который представляет целевой каталог */
    done();
  });
