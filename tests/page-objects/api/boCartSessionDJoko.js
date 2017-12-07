const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../helper/common.js');

var cartSessionPath = {
    newCart : "/cart/new",
    addItemCart : "/cart/additem",
    cartDetails : "/cart/detail"
};

var postNewCart = function(body, tokenSelection, response) {
  api.post(cartSessionPath.newCart)
    .set('Authorization', common.bearer(tokenSelection))
    .set('Accept', 'application/json')
    .send(body)
    .end(function(err, result) {
      response(result);
    })
};

var postAddItemCart = function(body, tokenSelection, response) {
  api.post(cartSessionPath.addItemCart)
    .set('Authorization', common.bearer(tokenSelection))
    .set('Accept', 'application/json')
    .send(body)
    .end(function(err, result) {
      response(result);
    })
};

var getCartBySession = function (sessionId, tokenSelection, response) {
  api.get (cartSessionPath.cartDetails+'/'+sessionId)
    .set ('Authorization', common.bearer(tokenSelection))
    .set('Accept', 'application/json')
    .end(function(err, result) {
      response(result);
    })  
};

module.exports = {
  postNewCart: postNewCart,
  postAddItemCart: postAddItemCart,
  getCartBySession: getCartBySession
}
