const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = [
  new ForkTsCheckerWebpackPlugin({
    async: false
  }),
  // 请确保引入这个插件！
  new VueLoaderPlugin()

];
