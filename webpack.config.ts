import path from 'path'
import * as webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import linkerPlugin from '@angular/compiler-cli/linker/babel'
import { AngularWebpackPlugin } from '@ngtools/webpack'
// import linkerPlugin from '@angular/compiler-cli/linker/babel'

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),

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
    // mainFields: ['es2020', 'es2015', 'browser', 'module', 'main'],
    // conditionNames: ['es2020', 'es2015', '...'],
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
        // exclude: [/node_modules/],
        use: [
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     plugins: [linkerPlugin],
          //     presets: ['@babel/preset-env'],
          //     compact: false,
          //     // cacheDirectory: true,
          //   },
          // },
          // { loader: 'babel-loader' },
          {
            loader: '@ngtools/webpack',
          },
          // { loader: '@angular-devkit/build-angular/webpack-loader' },
          // {
          //   loader: 'ts-loader',
          // },
          // {
          //   loader: 'angular2-template-loader',
          // },
        ],
      },
      {
        test: /\.m?js$/,
        // include: /node_modules\/@angular/,
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
    new AngularWebpackPlugin({
      // jitMode: false,
      // strictTemplates: false,
      // directTemplateLoading: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.angular.json'),
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
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: 'index.html',
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      inject: true,
    }),
  ],
}

export default config
