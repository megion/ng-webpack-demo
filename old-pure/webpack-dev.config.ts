import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { createDevConfig } from '../configs/webpack-old-dev.config'

const config: webpack.Configuration = {
  entry: {
    demoPages: './app/demo-pages/index',
  },
}
export default merge(createDevConfig(__dirname), config)
