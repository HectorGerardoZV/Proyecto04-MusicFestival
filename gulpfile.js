const { dest, src, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

const paths = {
    css: "build/css/",
    js: "build/js/",
    scss: "code/sass/**/*.scss",
    jsCode: "code/js/**/*.js"
}


function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest(paths.css));
}

function js() {
    return src(paths.jsCode)
        .pipe(concat("ïndex.js"))
        .pipe(dest(paths.js));
}

function observe() {
    watch(paths.jsCode, js);
    watch(paths.scss, css);
}





exports.default = observe;