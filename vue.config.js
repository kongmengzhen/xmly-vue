const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('views',path.resolve(__dirname,'./src/views'))
            .set('pages', path.resolve(__dirname, './src/pages/Classify'))
            .set('assets', path.resolve(__dirname, './src/assets'))
            .set('untils', path.resolve(__dirname, './src/untils'))
    }
}