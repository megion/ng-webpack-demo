// import path from 'path'
import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { createPrdConfig } from '../configs/webpack-next-prd.config'

const config: webpack.Configuration = {
  entry: {
    polyfills: './polyfills',
    main: './main',
  },

  // output: {
  //   path: path.resolve(__dirname, 'public'),
  // },
}
export default merge(createPrdConfig(__dirname), config)
