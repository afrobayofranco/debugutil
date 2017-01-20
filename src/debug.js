// Debug Utility with Logging by Melony Smith

// dependencies
const timestamp = require('log-timestamp');
const chalk = require('chalk');
const fs = require('fs');

// chalk rule
const debugSuccess = chalk.green;
const debugError = chalk.red;
const debugWarn = chalk.yellow;

// for success...
exports.debug = (title, type) => {
  if (process.env.DEBUG) {
    if(type == 'success'){
        console.log(debugSuccess(title))
    } else if (type == 'error'){
        console.error(debugError(title))
    } else if (type == 'warn'){
        console.warn(debugWarn(title))
    }

  };
}
