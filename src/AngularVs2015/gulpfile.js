/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    app: ['app/**/*.js', 'app/**/*.html', 'app/**/*.map'],
    libcommon: [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ],
    librxjs: [
        'node_modules/rxjs/**/*.js',
        '!node_modules/rxjs/bundles/*.js',
        '!node_modules/rxjs/testing/*.js'
    ],
    libangular: [
        'node_modules/@angular/core/bundles/core.umd.js',
        'node_modules/@angular/common/bundles/common.umd.js',
        'node_modules/@angular/compiler/bundles/compiler.umd.js',
        'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        'node_modules/@angular/http/bundles/http.umd.js',
        'node_modules/@angular/router/bundles/router.umd.js',
        'node_modules/@angular/forms/bundles/forms.umd.js',
        'node_modules/@angular/upgrade/bundles/upgrade.umd.js'
    ]
};

gulp.task('libcommon', function () {
    gulp.src(paths.libcommon).pipe(gulp.dest('wwwroot/lib/common'))
});

gulp.task('librxjs', function () {
    gulp.src(paths.librxjs).pipe(gulp.dest('wwwroot/lib/rxjs'))
});

gulp.task('libangular', function () {
    gulp.src(paths.libangular).pipe(gulp.dest('wwwroot/lib/angular'))
});

gulp.task('clean', function () {
    return del(['wwwroot/app/**/*','wwwroot/lib/**/*']);
});

gulp.task('default', ['libcommon', 'libangular', 'librxjs'], function () {
    gulp.src(paths.app).pipe(gulp.dest('wwwroot/app'))
});