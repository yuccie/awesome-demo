var path = require('path');
var express = require('express');
var proxy = require('http-proxy-middleware');
var serveStatic = require('serve-static');
var config = require('./config');
var webpackConfig = require('../vue.config.js');
var app = express();
var nodeEnv = process.env.NODE_ENV;
var apiMap = config[nodeEnv].proxy;
var port = config[nodeEnv].port;
var outputAbsolutePath = path.resolve(__dirname, `../${webpackConfig.outputDir}`);

// proxy api requests
Object.keys(apiMap).forEach(key => {
  const api = apiMap[key];
  app.use(key, proxy({
    target: api,
    changeOrigin: true
  }));
});
 
if (nodeEnv === 'production') {
  app.use('/health', function (req, res) {
    res.send('ok');
  });
}

// serve pure static assets
// var staticPath = path.posix.join(webpackConfig.baseUrl || '/', webpackConfig.assetsDir);
// console.log('staticPath', staticPath);
// app.use(staticPath, express.static(path.join(__dirname, '../', webpackConfig.outputDir, '/', webpackConfig.assetsDir), {
//   maxAge: '1y'
// }));

// app.use(function (req, res) {
//   res.sendFile(`${outputAbsolutePath}/index.html`, {
//     headers: {
//       'Content-Type': 'text/html; charset=UTF-8'
//     }
//   });
// });

function setHtmlHeaders(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    res.setHeader('Content-Type', 'charset=UTF-8');
  }
}

app.use(webpackConfig.baseUrl, serveStatic(path.join(__dirname, '../', webpackConfig.outputDir), {
  maxAge: '1y',
  index: ['index.html'],
  setHeaders: setHtmlHeaders
}));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  var uri = `http://localhost:${port}`;
  console.log(`Build server listening at ${uri} \n`);
});