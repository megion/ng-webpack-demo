import * as webpack from 'webpack'
import { merge } from 'webpack-merge'
import { createPrdConfig } from '../configs/webpack-old-prd.config'

const config: webpack.Configuration = {
  entry: {
    demoPages: './app/demo-pages/index',
    index: './app/index',
  },
}
export default merge(createPrdConfig(__dirname), config)
