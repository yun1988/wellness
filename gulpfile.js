var gulp = require('gulp');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var gulpLivereload = require('gulp-livereload');
gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            port: 1234,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('watch', function () {
    gulpLivereload.listen();
    // gulp.watch('javascript/original/*.js', ['scripts']);
    gulp.watch('css/**/*.css', ['styles']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('./images/*', ['images']);

});

gulp.task('default', ['webserver', 'watch']);