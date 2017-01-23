// Debug Utility Tool with Logging by Melony Smith

// dependencies
const chalk = require('chalk');

// chalk rule
const success = chalk.green;
const error = chalk.red;
const warn = chalk.yellow;

exports.debug = (title, type) => {
  if (process.env.DEBUG) {
    if (type == 'warn') {
        console.warn(warn(title, type))
    } else if (type == 'error') {
        console.error(error(title, type))
    } else {
        console.log(success(title, type))
    };
  }
}
