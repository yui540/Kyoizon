import webpack from 'webpack';
import WebpackNotifierPlugins from 'webpack-notifier';

const js = {
  entry: `${ __dirname }/src/scripts/app.js`,
  output: {
    path: `${ __dirname }/public/js`,
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tag/,
        enforce: 'pre',
        exclude: /node_modules/,
        use :[{
          loader: 'riot-tag-loader',
          options: {
            debug: true
          }
        }]
      },
      {
        test: /(\.js|\.tag|\.json)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: `${ __dirname }/public`,
    port: 8080
  },
  plugins: [
    new WebpackNotifierPlugins()
  ]
};

module.exports = [js];
