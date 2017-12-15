const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const pump = require("pump");

gulp.task('message', function(){
	return console.log("Gulp is running...");
});

gulp.task('minifyJS', function (cb) {
  pump([
      gulp.src('public/js/app.js'),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task("minifyCSS", function(){
	gulp.src("public/css/style.css")
	.pipe(cleanCSS())
	.pipe(gulp.dest("dist/css"))
});

gulp.task("default", ['message', 'minifyJS', 'minifyCSS'])
