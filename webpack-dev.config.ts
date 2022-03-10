import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import commonConfig from './webpack.config'

const config: webpack.Configuration = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,

  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   compress: true,
  //   port: 9000,
  // },

  optimization: {
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
}
export default merge(commonConfig, config)
