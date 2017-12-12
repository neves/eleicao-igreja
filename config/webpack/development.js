const environment = require('./environment')
const webpackConfig = environment.toWebpackConfig()
webpackConfig.devtool = 'cheap-module-source-map'
module.exports = webpackConfig
