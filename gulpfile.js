var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    typescript = require('gulp-tsc');
    
gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir:"./"
        }
    })  
})

gulp.task('compile',function(){
    gulp.src(['src/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('public/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch',['browser-sync'],function(){
    gulp.watch(['src/**/*.ts'],['compile']);
});

gulp.task('default',['watch']);