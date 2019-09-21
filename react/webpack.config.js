const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const distPath = path.resolve(rootDir, 'dist')

module.exports = {
  entry: {
    app: path.join(srcPath, 'app.tsx'),
  },
  output: {
    publicPath: '/',
    path: distPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'index.html'),
    }),
  ],
  devServer: {
    contentBase: distPath,
    host: '0.0.0.0',
    port: 6969,
  },
  devtool: 'inline-source-map',
}
