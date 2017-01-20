// Debug Utility Tool with Logging by Melony Smith

// dependencies
const expect = require('chai').expect;
const chalk = require('chalk');
const fs = require('fs');

// chalk rule
const success = chalk.green;
const error = chalk.red;
const warn = chalk.yellow;

describe ('debugutil', () => {
  it('test for success has run', () => {
    console.log(success('Test Successful: Success Works!'));
  });
  it('test for error has run', () => {
    console.error(error('Test Successful: Error Works!'));
  });
  it('test for warn has run', () => {
    console.warn(warn('Test Successful: Warn Works!'));
  });
});

fs.appendFile('./logs/logFile.log', function () {
  console.log('Data was appended to file!');
});
