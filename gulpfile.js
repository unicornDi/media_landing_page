var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();

const pathToSass = 'project/sass/*.scss'

gulp.task ('sass', function () {
    return gulp.src(pathToSass)
        .pipe(sass())
        .pipe(gulp.dest('project/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
});

gulp.task('reload', function() {
    browserSync.init({
        server: {
            baseDir: 'project'
        },
    })
})

gulp.task('watch' , function() {
    gulp.watch(pathToSass, ['sass']);
});

gulp.task('default', ['watch']);