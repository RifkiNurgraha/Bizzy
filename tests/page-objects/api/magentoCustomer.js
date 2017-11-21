const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_MAGENTO);
var common = require ('./../../helper/common.js');

var getCustomerDetail = function(customerId, description, describeIt, tokenSelection) {
    return new Promise((resolve, reject) => {
      describe('GET /customer/', function() {
        describe('#' + description, function() {
          it(describeIt, function(done) {
            api.get('/customer/' + customerId)
              // .query({includes:'company_address,company_employee'})
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
  
  module.exports = {
    getCustomerDetail: getCustomerDetail
  }
  