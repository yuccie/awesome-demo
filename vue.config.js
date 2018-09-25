const path = require('path');
const isProduction = process.env.NODE_ENV === 'production' ? true : false;
const iconRoot = path.resolve(__dirname, './src/assets/icons');
const mockRes = require('./mockRes');
const buildConfig = require('./build/config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    // 将原来非assets/icons目录下的还用file-loader的方式直接copy
    svgRule
      .test(/\.svg$/)
      .exclude
        .add(iconRoot)
        .end();
    
    // 将svg目录下的文件用svg-sprit-loader处理
    config.module.rule('icons')
      .test(/\.svg$/)
      .include
        .add(iconRoot)
        .end()    
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        });

    // 路径别名配置
    config.resolve.alias
      .set('src', path.resolve(__dirname, './src'))
      .set('common', path.resolve(__dirname, './src/common'))
      .set('assets', path.resolve(__dirname, './src/assets'))
      .set('utils', path.resolve(__dirname, './src/utils'))
      .set('views', path.resolve(__dirname, './src/views'))
      .set('routes', path.resolve(__dirname, './src/routes'))
      .set('store', path.resolve(__dirname, './src/store'))
      .set('components', path.resolve(__dirname, './src/components'));
    
    // 生产环境分包
    if (isProduction) {
      config.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              common: {
                minSize: 0,
                chunks: 'async'
              }
            }
          },
          runtimeChunk: true
        }
      });
    }

    // static目录直接copy
    config
      .plugin('copyStatic')
      .use(CopyWebpackPlugin, [
        [{
          from: path.resolve(__dirname, './static'),
          to: buildConfig.assetsDir,
          ignore: ['.*']        
        }]
      ]);
  },
  // 不会被inspect审查
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin([{
  //       from: path.resolve(__dirname, './test'),
  //       to: buildConfig.assetsDir,
  //       ignore: ['.*']         
  //     }])
  //   ]
  // },  

  css: undefined,
  // baseUrl: '/spa/',
  assetsDir: buildConfig.assetsDir,

  devServer: {
    before(app) {
      app.all('/api/*', (req, res, next) => {
        console.log('req', req.path);
        let url = req.url;
        let data = mockRes[url];
        res.json(data);
      });
    },
  },

  outputDir: buildConfig.outputDir,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
};
