const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../helper/common.js');
const testData = require('./../helper/testData.js');
var cartSession = require('./../page-objects/api/boCartSession.js');
var session = common.randomNumber();

var bodyCartNew = function() {
  body = testData.cartNewBody;
  body['session_id'] = session;
  return body;
};

var bodyAddItemCart = function() {
  body = testData.addItemBody;
  body['session_id'] = session;
  return body;
};

var bodyGetCartbySession = {
  "userID": "",
  "user_name": ""
}

var custString = {
  description: 'eCart - Cart Session',
  describeIt: {
    checkCreatenewSession: 'should create new session',
    checkAddItemCart: 'should add product to cart',
    getDetailsCartBySession: 'should get detail eCart by Session'
  }
};

// Create new cart
cartSession.postNewCart(bodyCartNew(), custString.description, custString.describeIt.checkCreatenewSession, 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.message).to.contain("Success Create Cart");
});

// Add item to cart
cartSession.postAddItemCart(bodyAddItemCart(), custString.description, custString.describeIt.checkAddItemCart, 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.message).to.contain("Success Add Item To Cart");
});

// Get Details Cart by Session
cartSession.getCartBySession (session, custString.description, custString.describeIt.getDetailsCartBySession, 'correct_token', function (response) {
  expect(response.status).to.equal(200);
  bodyGetCartbySession.user_name = response.body.data.user_name;
  bodyGetCartbySession.user_id = response.body.data.user_id;
  console.log (bodyGetCartbySession.user_name);
});