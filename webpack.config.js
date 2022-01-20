const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "./app.js"),
  },
  output: {
    filename: `[name].[contenthash:8].js`,
    path: path.join(__dirname, "./dist"),
    publicPath: "",
  },
  resolve: {
    extensions: [" ", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      chunks: ["app"],
      // hash: true,
      minify: {
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(),
    new UglifyjsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /.(js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // {
      //   test: /\.less$/,
      //   use: [{
      //       loader: 'css-loader'
      //     },
      //     'postcss-loader',
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         javascriptEnabled: true,
      //         modifyVars: {}
      //       }
      //     }
      //   ]
      // }
    ],
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    usedExports: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 9900,
  },
};
