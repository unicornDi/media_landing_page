var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();

gulp.task ('sass', function (){
    gulp.src('./project/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //outputStyle - нужно ли???
        .pipe(gulp.dest('./project'))
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

gulp.task('sass:watch' , function() {
    gulp.watch('./project/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);