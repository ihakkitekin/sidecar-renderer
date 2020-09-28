const path = require('path');

const clientConfig = {
  mode: "production",
  entry: {
    client: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: "web",
  stats: "errors-only",
  plugins: []
};

const serverConfig = {
  mode: "production",
  entry: {
    server: './src/server.tsx'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: "node",
  stats: "errors-only",
  plugins: []
};


module.exports = [
  serverConfig,
  clientConfig
]