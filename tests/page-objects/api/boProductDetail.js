const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../helper/common.js');

var productDetailPath= "/product/detail";

var getProductDetail = function(configurableId, customerId, description, describeIt, tokenSelection, response) {
  describe('GET /product/detail', function() {
    describe('#' + description, function() {
      it(describeIt, function(done) {
        api.get(productDetailPath + '/' + configurableId + '/' + customerId)
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

module.exports = {
  getProductDetail: getProductDetail
}
