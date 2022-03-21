import path from 'path'
import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { createConfig } from '../configs/webpack-next.config'

const config: webpack.Configuration = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,

  entry: {
    main: './main',
  },

  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'public'),
  },
}
export default merge(createConfig(__dirname), config)
