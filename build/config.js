const config = {
  contentBase: './mock',
  test: {
    port: 8071,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  production: {
    port: 8071,
    proxy: {
      '/api': 'http://localhost:3002'
    }
  },
  // 如果通过ui界面更改了配置后，这里要一致
  assetsDir: 'static',
  outputDir: 'dest'
};

module.exports = config;
