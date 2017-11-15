const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../helper/common.js');

var cartSessionPath = {
    newCart : "/cart/new",
    addItemCart : "/cart/additem"
};

var postNewCart = function(body, description, describeIt, tokenSelection) {
  return new Promise((resolve, reject) => {
    describe('eCart - Post /cart/new', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(cartSessionPath.newCart)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .send(body)
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

var postAddItemCart = function(body, description, describeIt, tokenSelection) {
  return new Promise((resolve, reject) => {
    describe('eCart - Post /cart/additem', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(cartSessionPath.addItemCart)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .send(body)
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
  postNewCart: postNewCart,
  postAddItemCart: postAddItemCart
}
