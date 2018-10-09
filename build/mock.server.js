'use strict';

const express = require('express');
const chalk = require('chalk');
const path = require('path');
const requireDir = require('require-dir');
const parse = require('url-parse');
const nodeEnv = process.env.NODE_ENV;
const config = require('./config');
console.log('nodeEnv', nodeEnv);
const proxyInfo = config[nodeEnv].proxy;
let port = 3000;
Object.keys(proxyInfo).forEach((objKey, index) => {
  if (index === 0) {
    let objTarget = proxyInfo[objKey];
    let parsePath = parse(objTarget);
    port = parsePath.port;
  }
});

const app = express();
const router = express.Router();
const routeModules = requireDir(path.resolve(config.contentBase), {recurse: true});

const nativeToString = Object.prototype.toString;

(function recursiveAppay(routeModules) {
  for (let moduleName in routeModules) {
    if ( routeModules.hasOwnProperty(moduleName) ) {
      if ( nativeToString.call(routeModules[moduleName]) === '[object Object]' ) {
        recursiveAppay(routeModules[moduleName]);
      } else if (
        routeModules.hasOwnProperty(moduleName)
        && typeof routeModules[moduleName] === 'function'
      ) {
        routeModules[moduleName](router);
      }
    }
  }
})(routeModules);

app.use(router);

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(chalk.red(err));
    return;
  }

  console.log(chalk.green('\nMock server listening at http://localhost:%s.\n'), port);
});
