import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { createConfig } from './webpack-next.config'

export function createDevConfig(cwd: string): webpack.Configuration {
  const config: webpack.Configuration = {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    watch: true,

    output: {
      publicPath: './',
      path: path.resolve(cwd, 'public'),
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Demo',
        template: 'index.html',
        favicon: path.resolve(cwd, 'src/favicon.ico'),
        inject: true,
      }),
    ],
  }
  return merge(createConfig(cwd), config)
}
