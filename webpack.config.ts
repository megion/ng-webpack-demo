import path from 'path'
import * as webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { AngularWebpackPlugin } from '@ngtools/webpack'
import linkerPlugin from '@angular/compiler-cli/linker/babel'

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.ts', '.js'],
  },

  entry: {
    main: './main',
    polyfills: './polyfills.ts', // add this
  },

  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      // {
      //   test: /.*\.(js|ts)$/,
      //   include: /node_modules\/(ngx-tiptap|ngx-another-lib)/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         configFile: false,
      //         plugins: ['@angular/compiler-cli/linker/babel'],
      //       },
      //     },
      //   ],
      // },
      // /* your regular build, excluding packages */
      // {
      //   test: /.*\.(js|ts)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'babel-loader' },
      //     { loader: '@ngtools/webpack' },
      //     // { loader: '@angular-devkit/build-optimizer/webpack-loader' },
      //   ],
      // },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            // loader: 'ts-loader',
            loader: '@ngtools/webpack',
          },
        ],
      },
      // {
      //   // test: /\.[jt]sx?$/,
      //   test: /\.ts$/,
      //   exclude: [/node_modules/],
      //   loader: '@ngtools/webpack',
      // },
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   // exclude: [/node_modules/],
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env'],
      //     cacheDirectory: true,
      //     compact: false,
      //     plugins: [linkerPlugin],
      //   },
      // },
      {
        test: /\.html$/,
        exclude: /index\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/,
        // Adds CSS to the DOM by injecting a <style> tag
        use: [
          // Adds CSS to the DOM by injecting a <style> tag
          //{loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
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
      {
        test: /\.less$/,
        use: [
          // creates style nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // translates CSS into CommonJS
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
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      // ... other options as needed
    }),
    // new ESLintPlugin({
    //   exclude: ['node_modules'],
    //   extensions: ['ts'],
    // }),
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
