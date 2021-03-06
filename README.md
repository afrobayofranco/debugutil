## debugutil
A [NodeJS](https://nodejs.org/en/) API debug utility tool with logging developed for my Deployment of Web Applications class at Full Sail University. This package will allow you to debug your API with success, warn and error messages displayed in your CLI (Command Line Interface).

## Required
This Debug Utility Tool will run on an API created with [NodeJS](https://nodejs.org/en/).

## Installation
In your CLI, ensure that you are in the directory containing your [NodeJS](https://nodejs.org/en/) API.

Run the following to add debugutil to your node_modules and your package.json file dependencies:
```javascript
npm install debugutil
```

## Dependencies
After installation, run the following to install the dependencies required to properly run debugutil:
```javascript
npm install
```

## Debugging
You will need to require the debugutil package in each file you wish it to run. You can do this by adding the following to the top of each file:
```javascript
const debugutil = require('debugutil');
```

To enable logging, use the following environmental variable:
```javascript
DEBUG=true
```

You will now receive green success, yellow warn and red error messages in your CLI.

To disable logging, use the following environmental variable:
```javascript
DEBUG=false
```

## Unit Testing
This package has been Unit Tested using [chai](https://www.npmjs.com/package/chai) and [mocha](https://www.npmjs.com/package/mocha). You will need to install these packages to your devDependencies to run tests.

To run tests, execute the following command in your CLI:
```javascript
DEBUG=true mocha
```

## Code Coverage
Check out [istanbul](https://www.npmjs.com/package/istanbul) for more on code coverage.

To run tests with code coverage, execute the following command in your CLI:
```javascript
istanbul cover src/debug.js
```

## Other  
You can change the display color of messages in src/debug.js via [chalk](https://www.npmjs.com/package/chalk) by editing the following:
```javascript
const success = chalk.green;
const warn = chalk.yellow;
const error = chalk.red;
```

## Version Bumper
To execute the version bumper from you command line, use:
~~~~
node vbumper.js -v { major | minor | patch } -n { Version_number }
~~~~

As example if you want to update the major version to 2.
~~~~
node vbumper.js -v major -n 2
~~~~
