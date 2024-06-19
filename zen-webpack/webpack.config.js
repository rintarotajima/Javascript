/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */
const config = {
    module: {
      rules: [
        {
          // 拡張子 js のファイル（正規表現）
          test: /\.js$/,
          // ローダーの指定
          loader: "babel-loader",
        },
      ],
    },
  };
  
  // 設定を CommonJS 形式でエクスポート
  module.exports = config;