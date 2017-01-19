// Debug Utility with Logging by Melony Smith

// dependencies
const timestamp = require('log-timestamp');
const chalk = require('chalk');
const fs = require('fs');

// chalk rule
const debugSuccess = chalk.green;
const debugError = chalk.red;

// for success...
debugSuccess => {
  if (process.env.DEBUG) {
    console.log(debugSuccess(info));
    fs.appendFile('./logs/log.log', '\n' +  info  + '\n', (debugSuccess) => {
    });
  };
}

// for error...
debugError => {
  if (process.env.DEBUG) {
    console.log(debugError(info));
    fs.appendFile('./logs/log.log', '\n' +  info  + '\n', (debugError) => {
    });
  };
}

// export
exports.debugSuccess = debugSuccess;
exports.debugError = debugError;
