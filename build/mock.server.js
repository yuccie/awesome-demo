'use strict';

const express = require('express');
const chalk = require('chalk');
const path = require('path');
const requireDir = require('require-dir');

const app = express();
const router = express.Router();

const config = require('./config');
const port = config.port;

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
