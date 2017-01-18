// UDebug Utility with Logging by Melony Smith

// dependencies
const chalk = require('cli-color');
const fs = require('fs');
const stamp = require('log-timestamp');

// chalk rule
const debugSuccess = chalk.green;
const debugError = chalk.red;

// success
debugSuccess (info) => {
  if (process.env.DEBUG) {
    (clc.green(console.log(info));
    fs.appendFile('./logs/log.log', '\n' +  info  + '\n', (debugSuccess) => {
    });
  };
}

// error
debugError (info) => {
  if (process.env.DEBUG) {
    (clc.red(console.log(info));
    fs.appendFile('./logs/log.log', '\n' +  info  + '\n', (debugError) => {
    });
  };
}

// export
exports.debugSuccess = debugSuccess;
exports.debugError = debugError;
