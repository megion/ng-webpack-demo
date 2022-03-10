import * as webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import commonConfig from './webpack.config'

const config: webpack.Configuration = {
  mode: 'production',
  resolve: {
    alias: {
      [path.resolve(__dirname, 'environments/environment.ts')]: path.resolve(
        __dirname,
        'environments/environment.prod.ts',
      ),
    },
  },
  optimization: {
    minimize: false,
  },
}
export default merge(commonConfig, config)
