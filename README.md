## debugutil
A [NodeJS](https://nodejs.org/en/) API debug utility tool with logging developed for my Deployment of Web Applications class at Full Sail University. This package will allow you to debug your API with success and error messages displayed in your CLI (Command Line Interface) as well as saving timestamped messages to a .log file.

## Required
This Debug Utility Tool will run on an API created with [NodeJS](https://nodejs.org/en/)

## Installation
In your CLI, ensure that you are in the directory containing your [NodeJS](https://nodejs.org/en/) API.

Run the following to add debugutil to your node_modules and your package.json file dependencies:
```javascript
npm install --save debugutil
```

## Dependencies
After installation, run the following to install the dependencies required to properly run debugutil:
```javascript
npm install
```

## Debugging
You will need to require the debugutil package in each file you wish it to run. You can do this by adding the following to the top of each file:
```
javascript
const debug = require('utildebug')
```

To enable logging, add the following environmental variable to your server start command:
```javascript
DEBUG=true
```

You will now receive green success and red error messages in your CLI as well as have them logged to the .log file.

To disable logging, add the following environmental variable to your server start command:
```javascript
DEBUG=false
```

## Unit Testing
I have also included Unit Testing for this package. Unit Testing is provided using [chai](https://www.npmjs.com/package/chai), [supertest]https://www.npmjs.com/package/supertest() and [mocha](https://www.npmjs.com/package/mocha).
To run Unit Test, run the following command in your CLI:
```javascript
mocha
```

## Code Coverage
Check out [istanbul](https://www.npmjs.com/package/istanbul) for more on code coverage.

## Other
Please note, the package will create the .log file for you, but not the folder to which the .log file is saved. In your root directory, you will need to manually create a folder called log in which the .log file is saved.

You can change the name and/or path of the folder and the .log file, in src/debug.js. Just edit the following lines:
```javascript
fs.appendFile('./logs/log.log', '\n' +  info  + '\n', (debugSuccess) => {
});
```
and
```javascript
fs.appendFile('./logs/log.log', '\n' +  info  + '\n', (debugError) => {
    });
```    

You can change the display color of messages in src/debug.js via [chalk](https://www.npmjs.com/package/chalk) by editing the following:
```javascript
const debugSuccess = chalk.green;
const debugError = chalk.red;
```
