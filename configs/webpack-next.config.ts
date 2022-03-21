import path from 'path'
import * as webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import { AngularWebpackPlugin } from '@ngtools/webpack'

export function createConfig(cwd: string): webpack.Configuration {
  const config: webpack.Configuration = {
    context: path.resolve(cwd, 'src'),

    output: {
      filename: 'js/[name].js',
      library: '[name]',
      libraryTarget: 'umd',
      chunkFilename: 'chunks/[name].js',
    },

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

    resolve: {
      extensions: ['.ts', '.tsx', '.mjs', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: '@ngtools/webpack',
            },
          ],
        },
        {
          test: /\.m?js$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@angular/compiler-cli/linker/babel'],
              compact: false,
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          // Adds CSS to the DOM by injecting a <style> tag
          use: [
            // extracts CSS into separate files
            {
              loader: MiniCssExtractPlugin.loader,
            },
            // css-loader interprets @import and url()
            // like import/require() and will resolve them
            {
              loader: 'css-loader',
            },
          ],
        },
        /*
         * loaders for component styles, exclude common styles
         */
        {
          test: /\.less$/,
          exclude: [/styles/],
          use: [
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              },
            },
            // compiles Less to CSS
            {
              loader: 'less-loader',
            },
          ],
        },
        /*
         * loaders for styles from `styles` directory
         */
        {
          test: /\.less$/,
          include: [/styles/],
          use: [
            // extracts CSS into separate files
            {
              loader: MiniCssExtractPlugin.loader,
            },
            // css-loader interprets @import and url()
            {
              loader: 'css-loader',
            },
            // compiles Less to CSS
            {
              loader: 'less-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/inline',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new AngularWebpackPlugin({
        // jitMode: false,
        // directTemplateLoading: true,
        tsconfig: path.resolve(cwd, 'tsconfig-angular.json'),
        compilerOptions: {
          fullTemplateTypeCheck: true,
        },
        // jitMode: true,
        // ... other options as needed
      }),
      new ESLintPlugin({
        exclude: ['node_modules'],
        extensions: ['ts'],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  }
  return config
}
