// Debug Utility Tool with Logging by Melony Smith

// dependencies
require('log-timestamp');
const chalk = require('chalk');
const fs = require('fs');

// define console colors by type
let warn = chalk.yellow;
let error = chalk.red;
let success = chalk.green;

// debug
exports.debug = (title, type) => {
  // if DEBUG is equal to true...
  if (process.env.DEBUG = 'true') {
    // if type of message is equal to warn...
    if(type == 'warn'){
       //...console in yellow      
       console.warn(warn(title))
    // if type of message is equal to error...  
    } else if (type == 'error'){
        // ...console in red
        console.error(error(title))
    // if type of message is not equal to warn or error...  
    } else {
        // ...console all other messages in gree
        console.log(success(title))
    }
  };
}
