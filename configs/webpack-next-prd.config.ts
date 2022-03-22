import * as webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import { createConfig } from './webpack-next.config'

export function createPrdConfig(cwd: string): webpack.Configuration {
  const config: webpack.Configuration = {
    mode: 'production',

    output: {
      path: path.resolve(cwd, 'dist'),
    },
    optimization: {
      minimize: false,
    },

    externals: [
      {
        angular: {
          commonjs: 'angular',
          commonjs2: 'angular',
          amd: 'angular',
          root: 'angular', // indicates global variable
        },
        'angular-ui-router': {
          commonjs: 'angular-ui-router',
          commonjs2: 'angular-ui-router',
          amd: 'angular-ui-router',
        },
      },
      // Regex
      /^@angular\//i,
      /^zone.js/i,
      /^rxjs/i,
    ],

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
  return merge(createConfig(cwd), config)
}
