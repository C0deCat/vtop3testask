const { stream } = require('browser-sync');
var gulp = require('gulp'), 
less = require('gulp-less'),
path = require ('path'),
browserSync = require('browser-sync');


gulp.task('less', function() {
    return gulp.src('app/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/**/*.js', 'app/libs/**/*.js'])
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch('app/less/**/*.less', gulp.parallel('less'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch(['app/js/**/*.js', 'app/libs/**/*.js'], gulp.parallel('scripts'))
});

gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch'));
