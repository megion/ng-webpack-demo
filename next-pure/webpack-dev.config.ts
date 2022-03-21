import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { createDevConfig } from '../configs/webpack-next-dev.config'

const config: webpack.Configuration = {
  entry: {
    polyfills: './polyfills',
    main: './main',
  },
}
export default merge(createDevConfig(__dirname), config)
