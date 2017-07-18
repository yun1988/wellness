var gulp = require('gulp');
// var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var gulpLivereload = require('gulp-livereload');

// gulp.task('webserver', function () {
//     gulp.src('./')
//         .pipe(webserver({
//             port: 1234,
//             livereload: true,
//             directoryListing: false,
//             open: true,
//             fallback: 'index.html'
//         }));
// });

gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
});



gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(connect.reload())
        .pipe(gulpLivereload());

});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload())
        .pipe(gulpLivereload());

});

gulp.task('images', function () {
    gulp.src('images/*')
        .pipe(connect.reload())
        .pipe(gulpLivereload());
});


gulp.task('watch', function () {
    gulpLivereload.listen();
    // gulp.watch('javascript/original/*.js', ['scripts']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('images/*', ['images']);

}).on('change', function () {
    livereload.changed(35732)
});;



gulp.task('default', ['connect', 'watch']);