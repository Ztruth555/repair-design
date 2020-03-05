const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

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

// /* минимизируем CSS-файлы и добавляем к ним конечный .min.css */
// gulp.task('styles', function(done) {
//     gulp.src(['./*.css'])
//     .pipe(concat('style.min.css'))             /* объединяем CSS-файлы и переименовываем их */
//     .pipe(autoprefix('last 2 versions'))       /* указываем текущую и предыдущие версии всех браузеров */
//     .pipe(minifyCSS())                         /* минимизируем все CSS-скрипты из папки => копируем в папку сборки */
//     .pipe(gulp.dest('css/'));                  /* вызываем метод "dest" с аргументом, который представляет целевой каталог */
//     done();
//   });

  // Compile sass into CSS & auto-inject into browsers
function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;
