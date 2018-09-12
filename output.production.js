{
  mode: 'production',
  context: '/Users/finup/workspace/vue-spa-template-3.0',
  devtool: 'source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/finup/workspace/vue-spa-template-3.0/dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    symlinks: false,
    alias: {
      '@': '/Users/finup/workspace/vue-spa-template-3.0/src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      src: '/Users/finup/workspace/vue-spa-template-3.0/src',
      common: '/Users/finup/workspace/vue-spa-template-3.0/src/common',
      assets: '/Users/finup/workspace/vue-spa-template-3.0/src/assets',
      views: '/Users/finup/workspace/vue-spa-template-3.0/src/views',
      routes: '/Users/finup/workspace/vue-spa-template-3.0/src/routes',
      store: '/Users/finup/workspace/vue-spa-template-3.0/src/store',
      components: '/Users/finup/workspace/vue-spa-template-3.0/src/components'
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.ts',
      '.tsx'
    ],
    modules: [
      'node_modules',
      '/Users/finup/workspace/vue-spa-template-3.0/node_modules',
      '/Users/finup/workspace/vue-spa-template-3.0/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      '/Users/finup/workspace/vue-spa-template-3.0/node_modules',
      '/Users/finup/workspace/vue-spa-template-3.0/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/.cache/vue-loader',
              cacheIdentifier: '1dd9ce41'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/.cache/vue-loader',
              cacheIdentifier: '1dd9ce41'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.svg$/,
        exclude: [
          '/Users/finup/workspace/vue-spa-template-3.0/src/assets/icons'
        ],
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        use: [
          /* config.module.rule('pug').use('pug-plain-loader') */
          {
            loader: 'pug-plain-loader'
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/.cache/babel-loader',
              cacheIdentifier: '498bbe68'
            }
          },
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: 'thread-loader'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/finup/workspace/vue-spa-template-3.0/node_modules/@vue/cli-service/lib'
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue',
                '.ts',
                '.tsx'
              ],
              cache: true,
              cacheIdentifier: '6eaad056',
              emitWarning: true,
              emitError: false,
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/.cache/ts-loader',
              cacheIdentifier: 'e18f90c8'
            }
          },
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader: 'thread-loader'
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'babel-loader'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: true
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/finup/workspace/vue-spa-template-3.0/node_modules/.cache/ts-loader',
              cacheIdentifier: 'e18f90c8'
            }
          },
          /* config.module.rule('tsx').use('thread-loader') */
          {
            loader: 'thread-loader'
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'babel-loader'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      },
      /* config.module.rule('icons') */
      {
        test: /\.svg$/,
        include: [
          '/Users/finup/workspace/vue-spa-template-3.0/src/assets/icons'
        ],
        use: [
          /* config.module.rule('icons').use('svg-sprite-loader') */
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      {
        options: {
          test: /\.js(\?.*)?$/i,
          warningsFilter: function () {
                return true;
              },
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: function (defaultCacheKeys) {
                return defaultCacheKeys;
              },
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          uglifyOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: true,
        cssnanoOptions: {
          safe: true,
          autoprefixer: {
            disable: true
          },
          mergeLonghand: false,
          map: {
            inline: false
          }
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      function () { /* omitted long function */ }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        template: '/Users/finup/workspace/vue-spa-template-3.0/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: '/Users/finup/workspace/vue-spa-template-3.0/public',
          to: '/Users/finup/workspace/vue-spa-template-3.0/dist',
          ignore: [
            'index.html',
            '.DS_Store'
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: false,
        formatter: 'codeframe',
        checkSyntacticErrors: true
      }
    )
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
