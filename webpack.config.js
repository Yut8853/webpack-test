const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), //パスの取得と取得先の設定
    filename: 'index.js' //出力されるファイルネームの変更
  },
  module: {
    rules: [ // moduleの中のrulesという項目
      {
        test: /\.css/, // .cssというファイルが見つかればloaderを使う
        use: [
          {
            loader: 'style-loader',//2
          },
          {
            loader: 'css-loader', //1
          },
        ],
      },
    ],
  },
}