const path = require("path");
const { config } = require("process");
function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/plugOrEcologu' : '/',
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@a", resolve("src/assets"))
            .set("@c", resolve("src/components"))
            .set("@v", resolve("src/views"))
            .set("@u", resolve("src/utils"))
    },
    outputDir: 'plugOrEcologu'
}