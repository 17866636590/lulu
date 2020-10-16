const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
//拷贝.html代码
gulp.task("copy-html", function () {
    return gulp.src("*.html")
        .pipe(htmlmin({
            removeEmptyAttibutes: true,
            collapseWhitespace: true,
        })).pipe(gulp.dest("dist/"))
    // .pipe(connect.reload())
});
//处理php文件
gulp.task("php", function () {
    return gulp.src(["*.php"])
        .pipe(gulp.dest("dist/php"))
        .pipe(connect.reload());
})
//处理图片
gulp.task("images", function () {
    return gulp.src("./images/*.{jpg,png,gif}")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
})
//处理js文件
gulp.task("scripts", function () {
    return gulp.src(["./js/*.js", "!gulpfile.js"])
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
})
//处理json文件
gulp.task("data", function () {
    return gulp.src(["./data/*.json", "!package.json"])
        .pipe(gulp.dest("dist/data"))
        .pipe(connect.reload());
})
//处理css样式
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sassIndex", function () {
    return gulp.src("./stylesheet/index.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(minifycss())
        .pipe(rename("index.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})

gulp.task("sassBanner", function () {
    return gulp.src("./stylesheet/banner.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(minifycss())
        .pipe(rename("banner.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})
gulp.task("sassList", function () {
    return gulp.src("./stylesheet/goodsList.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(minifycss())
        .pipe(rename("goodsList.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})
gulp.task("sassDetails", function () {
    return gulp.src("./stylesheet/goodsDetails.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(minifycss())
        .pipe(rename("goodsDetails.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})
gulp.task("sassCar", function () {
    return gulp.src("./stylesheet/goodsCar.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(minifycss())
        .pipe(rename("goodsCar.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})
gulp.task("sassRegister", function () {
    return gulp.src("./stylesheet/register.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(minifycss())
        .pipe(rename("register.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})
gulp.task("build", ["copy-html", 'images', 'scripts', 'data', 'sassIndex', 'sassBanner','sassList','sassDetails','sassCar',"sassRegister",'php'])

//监听
gulp.task("watch", function () {
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("./images/*.{jpg,png}", ["images"]);
    gulp.watch(["./js/*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch(["./data/*.json", "!package.json"], ["data"]);
    gulp.watch("./stylesheet/index.scss", ["sassIndex"]);
    gulp.watch("./stylesheet/banner.scss", ["sassBanner"]);
    gulp.watch("./stylesheet/goodsList.scss", ["sassList"]);
    gulp.watch("./stylesheet/goodsDetails.scss", ["sassDetails"]);
    gulp.watch("./stylesheet/goodsCar.scss", ["sassCar"]);
    gulp.watch("./stylesheet/register.scss", ["sassRegister"]);
    gulp.watch("*.php", ["php"]);
})
const connect = require("gulp-connect");
gulp.task("server", function () {
    connect.server({
        root: "dist",
        port: 3000,
        livereload: true
    })
})
//同时启动服务和监听
gulp.task("default", ['watch', 'server']);