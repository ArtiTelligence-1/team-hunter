// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  devServer: {
    open: false,
    host: "localhost",
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false
      },
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {env: {}}
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/, 
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader",
            options: {
                lessOptions: {
                    modifyVars: { 
                      '@slider-track-background-color': '#e53637',
                      '@slider-track-background-color-hover': '#e53637',

                      '@slider-handle-color': '#000000',
                      '@slider-handle-color-hover': '#e53637',
                      '@slider-handle-color-focus': 'tint(#000000, 20%)',
                      '@slider-handle-color-focus-shadow': 'fade(#e53637, 12%)',
                      '@slider-handle-color-tooltip-open': '#e53637'
                    },
                    javascriptEnabled: true,
                }
            }
        }]
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif|ico|css|js)$/,
      //   exclude: /node_modules/,
      //   use: ['file-loader?name=[name].[ext]']
      // }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  devtool: isProduction ?'source-map' : 'inline-source-map'
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
