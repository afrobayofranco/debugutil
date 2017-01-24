// Debug Utility Tool with Logging by Melony Smith

// Dependencies
const expect = require('chai').expect;
const debug = require('../src/debug.js');
require('mocha-sinon');

const chalk = require('chalk');

process.env.DEBUG= true;

describe ('debugutil', (done) => {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
    this.sinon.stub(console, 'error');
    this.sinon.stub(console, 'warn');
  });

  it('test for success has run', (done) => {
    debug.debug('Success Message', 'success');
    expect(console.log.calledOnce).to.be.true;
    done();
  });
  it('test for error has run', (done) => {
    debug.debug('Error Message', 'error')
    expect(console.error.calledOnce).to.be.true;
    done();
  });
  it('test for warn has run', (done) => {
    debug.debug('Warning Message', 'warn')
    expect(console.warn.calledOnce).to.be.true;
    done();
  });
});
