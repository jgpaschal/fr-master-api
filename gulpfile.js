/**
 * @author          John Paschal
 * @createdDate:    28 Jan 2016
 * @description     gulpfile provides various tasks to build and run.
 *                  test: Task to run test cases and to find code coverage.
 *                  precompile: Task to precompile javascript code with jshint.
 *                  es6compile: Task to precompile javascript code with eslint.
 *                  babelify: Task to convert ES6 code to ES5 spec.
 *                  serve: To run the server after a complete build.
 */
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    jshint = require('gulp-jshint'),
    eslint = require('gulp-eslint'),
    util = require('gulp-util'),
    babel = require('gulp-babel'),
    jscs = require('gulp-jscs'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path'),
    nodemon = require('gulp-nodemon'),
    airBnpRules = require('./.eslintrc');

gulp.task('pre-test', ()=>{
    return gulp.src(['build/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('test', ()=>{
    return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' })
    .on('error', handleError))
    .pipe(istanbul.writeReports('./test_coverage'))
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('watch-test', ()=>{
    gulp.watch(['build/lib/**','main.js','test/**'], ['test']);
});

gulp.task('precompile', ()=>{
    return gulp.src('./lib/**/*.js')
    .pipe(jshint({
            'esversion': 6
        }))
    .pipe(jshint.reporter('default'));
});

gulp.task('es6compile', ()=>{
    return gulp.src('./lib/**/*.js')
        .pipe(eslint(airBnpRules))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

var paths = {
    es6: ['./lib/**/*.js'],
    es5: 'build/lib',
    config:['./config/**/*.json', './config/*.js'],
    configDest:'build/config',
    configSourceRoot: path.join(__dirname, 'config'),
    sourceRoot: path.join(__dirname, 'es6')
};

gulp.task('babelifyLib', ()=>{
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.',{ sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.es5));
});

gulp.task('babelifyMain', ()=>{
    return gulp.src('main.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.',{ sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest('build'));
});

gulp.task('babelifyModels', ()=>{
    return gulp.src('/models/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.',{ sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest('build/lib'));
});

gulp.task('copyConfig',()=>{
    return gulp.src(paths.config)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.',{ sourceRoot: paths.configSourceRoot }))
        .pipe(gulp.dest(paths.configDest));
});

gulp.task('copyLog',()=>{
    return gulp.src(['./log'])
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('build'));
});

gulp.task('babelify', ['babelifyMain', 'babelifyLib']);

gulp.task('style-checker', ()=>{
    return gulp.src(paths.es6)
        .pipe(jscs({fix: false}))
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(gulp.dest('style'));
});

gulp.task('build', ['precompile', 'es6compile', 'copyConfig', 'copyLog', 'babelify']);

gulp.task('buildDev', ['copyConfig', 'copyLog', 'babelify']);

gulp.task('serve', ['build'], (event)=>{
    process.chdir('./build');
    nodemon({
        script: 'main.js'
    });
});

gulp.task('serveDev', ['buildDev'], (event)=>{
    process.chdir('./build');
    nodemon({
        script: 'main.js'
    });
});

gulp.task('default', ['serve']);
