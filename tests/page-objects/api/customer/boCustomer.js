const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../../helper/common.js');

var customerPath = "/customer";

var getCustomer = function(customerID, description, describeIt, tokenSelection) {
  return new Promise((resolve, reject) => {
    describe('GET /customer', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(customerPath + '/' + customerID)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .end(function(err, result) {
              resolve(result);
              if (err) {
                return reject(err);
              }
              done();
          })
        })
      })
    })
  })
};

var postCustomer = function(body, description, describeIt, tokenSelection) {
  return new Promise((resolve, reject) => {
    describe('POST /customer', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.post(customerPath)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .send(body)
            .end(function(err, result) {
              resolve(result);
              if (err) {
                return reject(err);
              }
              done(err);
          })
        })
      })
    })
  })
};

module.exports = {
  getCustomer: getCustomer,
  postCustomer: postCustomer
};
