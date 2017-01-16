// URL Shortener by Melony Smith

/* eslint-env mocha */

const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');

const db = require('../src/models/db');

request('http://localhost:3000');
require('../src/lib/debug');

const app = express();

require('dotenv').config();

describe('API', () => {
  let server;
  beforeEach(() => {
    server = require('../src/server');
  });
  afterEach(() => {
    server.close();
  });

  describe('Express', () => {
    it('responds to /', () => {
      request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    });
    it('404s everything else', () => {
      request(server)
        .get('/something/random')
        .expect(404);
    });
  });

  describe('Server', () => {
    it('server up and listening on Port 3000', () => {
      request(server);
      app.get('/', (req, res) => {
        res.status(200);
      });
      app.listen(3000, () => {
        server.address().port;
      });
      return server;
    });
  });

  describe('Debug', () => {
    it('Debug OK', () => {
    });
  });
});
