const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js','deps.css','deps.fonts'])

gulp.task('deps.js', function() {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/js/affix.js',
        'node_modules/bootstrap/js/alert.js',
        'node_modules/bootstrap/js/button.js',
        'node_modules/bootstrap/js/carousel.js',
        'node_modules/bootstrap/js/collapse.js',
        'node_modules/bootstrap/js/dropdown.js',
        'node_modules/bootstrap/js/modal.js',
        'node_modules/bootstrap/js/popover.js',
        'node_modules/bootstrap/js/scrollspy.js',
        'node_modules/bootstrap/js/tab.js',
        'node_modules/bootstrap/js/tooltip.js',
        'node_modules/bootstrap/js/transition.js',
        'node_modules/holderjs/holder.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {
    gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', function() {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/bootstrap/fonts/*.*'
    ])
    .pipe(gulp.dest('public/assets/fonts'))
})