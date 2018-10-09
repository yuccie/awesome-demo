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
      '/api': 'http://localhost:3002',
      '/contract': 'http://106.75.9.81'
    }
  },
  assetsDir: 'static',
  outputDir: 'dest'
};

module.exports = config;
