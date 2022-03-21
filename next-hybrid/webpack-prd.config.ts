import * as webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import { createConfig } from '../configs/webpack-old.config'

const config: webpack.Configuration = {
  mode: 'production',
  resolve: {
    alias: {
      './environments/environment': path.resolve(
        __dirname,
        'src/environments/environment.prod.ts',
      ),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.[cm]?js$/,
        enforce: 'pre',
        use: [
          {
            loader: 'source-map-loader',
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                //TODO: remove all source map urls
                return false
              },
            },
          },
        ],
      },
    ],
  },
}
export default merge(createConfig(__dirname), config)