var gulp = require('gulp');
var exec = require('gulp-exec');
var browserSync = require('browser-sync').create();

gulp.task('pandoc-html', function() {
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
  };
  return gulp.src('./src/*.md')
  .pipe(exec('pandoc <%= file.path %> -s --self-contained -t html5 -c ./src/github.css --toc --toc-depth=3 -o ./dest/output.html'))
  .pipe(exec.reporter(reportOptions));
});

gulp.task('pandoc-word', function() {
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
  };
  return gulp.src('./src/*.md')
  .pipe(exec('pandoc <%= file.path %> -s --toc --toc-depth=3 -o ./dest/output.docx'))
  .pipe(exec.reporter(reportOptions));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./dest",
      index: "output.html"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('./src/*.md', ['pandoc-html']);
  gulp.watch('./dest/output.html', ['bs-reload']);
});
