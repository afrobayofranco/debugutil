// Debug Utility Tool with Logging by Melony Smith

const request = require('supertest');
const expect = require('chai');

const debug= require('../src/debug.js');

describe ('debugutil', () => {
  const logArray = [
    {
      testName: 'should log error',
      functionName: debug.debugSuccess,
      functionType: 'debug.debugSuccess',
    },
    {
      testName: 'should log success',
      functionName: debug.debugError,
      functionType: 'debug.debugError',
    },
  ]
    for (let i = 0; i < logArray.length; i++) {
      it (logArray[i].testName, (done) => {
          logArray[i].functionName('This is a '+ logArray[i].functionType + ' test')
     done()
    })
  }
})
