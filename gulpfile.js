var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('postcss', ['sass'], function () {
    var plugins = [
        autoprefixer({browsers: ['last 15 version']}),
        cssnano()
    ];
    return gulp.src('project/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('project/css'))
        .pipe(browserSync.reload({
            stream: true
          }));
});

const pathToSass = 'project/sass/*.scss'

gulp.task ('sass', function () {
    return gulp.src(pathToSass)
        .pipe(sass())
        .pipe(gulp.dest('project/css'))
});

gulp.task('reload', function() {
    browserSync.init({
        server: {
            baseDir: 'project'
        },
    })
})

gulp.task('watch', ['sass', 'postcss', 'reload'], function() {
    gulp.watch(pathToSass, ['sass', 'postcss']);
    gulp.watch('project/index.html', browserSync.reload)
});

gulp.task('default', ['watch']);