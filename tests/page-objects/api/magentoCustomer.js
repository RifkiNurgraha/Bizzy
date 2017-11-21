const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_MAGENTO);
var common = require ('./../../helper/common.js');

var getCustomerDetail = function(customerId, description, describeIt, tokenSelection, response) {
    describe('GET /customers/', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get('/customers/' + customerId)
            // .query({includes:'company_address,company_employee'})
            .set('Authorization', common.bearerMagento(tokenSelection))
            .set('Accept', 'application/json')
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
  };
  
  module.exports = {
    getCustomerDetail: getCustomerDetail
  }
  