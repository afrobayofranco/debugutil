// Debug Utility with Logging by Melony Smith

// dependencies
require('log-timestamp');
const chalk = require('chalk');
const fs = require('fs');

// Define type
let warn = chalk.yellow;
let error = chalk.red;
let success = chalk.green;

// For all types
exports.debug = (title, type) => {
  if (process.env.DEBUG) {
    if(type == 'warn'){
        console.warn(warn(title))
    } else if (type == 'error'){
        console.error(error(title))
    } else {
        console.log(success(title))
    }
  };
}
