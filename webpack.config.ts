import path from 'path'
import * as webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import { AngularWebpackPlugin } from '@ngtools/webpack'
// import linkerPlugin from '@angular/compiler-cli/linker/babel'

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.ts', '.js'],
  },

  entry: {
    polyfills: './polyfills.ts',
    main: './main',
  },

  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: /index\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              esModule: false,
            },
          },
        ],
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
    // new AngularWebpackPlugin({
    //   tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    //   // ... other options as needed
    // }),
    new ESLintPlugin({
      exclude: ['node_modules'],
      extensions: ['ts'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: 'index.html',
      inject: true,
    }),
  ],
}

export default config
