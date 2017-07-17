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
        'node_modules/gentelella/vendors/jquery/dist/jquery.min.js',
        'node_modules/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/gentelella/vendors/fastclick/lib/fastclick.js',
        'node_modules/gentelella/vendors/nprogress/nprogress.js',
        'node_modules/gentelella/vendors/Chart.js/dist/Chart.min.js',
        'node_modules/gentelella/vendors/gauge.js/dist/gauge.min.js',
        'node_modules/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
        'node_modules/gentelella/vendors/iCheck/icheck.min.js',
        'node_modules/gentelella/vendors/skycons/skycons.js',
        'node_modules/gentelella/vendors/Flot/jquery.flot.js',
        'node_modules/gentelella/vendors/Flot/jquery.flot.pie.js',
        'node_modules/gentelella/vendors/Flot/jquery.flot.time.js',
        'node_modules/gentelella/vendors/Flot/jquery.flot.stack.js',
        'node_modules/gentelella/vendors/Flot/jquery.flot.resize.js',
        'node_modules/gentelella/vendors/moment/min/moment.min.js',
        'node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js',
        'node_modules/gentelella/build/js/custom.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {
    gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/gentelella/build/admin/css/style.min.css',
        'node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/gentelella/vendors/nprogress/nprogress.css',
        'node_modules/gentelella/vendors/iCheck/skins/flat/green.css',
        'node_modules/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
        'node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css',
        'node_modules/gentelella/build/css/custom.min.css'
    ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', function() {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'
    ])
    .pipe(gulp.dest('public/assets/fonts'))
})