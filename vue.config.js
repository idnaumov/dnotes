module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/dnotes/'
      : '/',
    devServer: {
      historyApiFallback: true
    }
  }
  