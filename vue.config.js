const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: {
    plugins: [
        new BundleAnalyzerPlugin({ port: 3500 }),
    ],
  }
}
