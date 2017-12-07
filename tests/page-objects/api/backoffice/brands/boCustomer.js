const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../../helper/common.js');

var customerPath = "/customer";

var getCustomer = function(customerID, description, describeIt, tokenSelection, response) {
  describe('GET /customer', function() {
    describe('#' + description, function() {
      it(describeIt, function(done) {
        api.get(customerPath + '/' + customerID)
          .set('Authorization', common.bearer(tokenSelection))
          .set('Accept', 'application/json')
          .end(function(err, result) {
            response(result);
            done(err);
        })
      })
    })
  })
};


var postCustomer = function(body, description, describeIt, tokenSelection, response) {
  describe('POST /customer', function() {
    describe('#' + description, function() {
      it(describeIt, function(done) {
        api.post(customerPath)
          .set('Authorization', common.bearer(tokenSelection))
          .set('Accept', 'application/json')
          .send(body)
          .end(function(err, result) {
            response(result);
            done(err);
        })
      })
    })
  })
};

module.exports = {
  getCustomer: getCustomer,
  postCustomer: postCustomer
};
