const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../helper/common.js');
const testData = require('./../helper/testData.js');
var cartSession = require('./../page-objects/api/boCartSession.js');

var bodyCartNew = function() {
  var session = common.randomNumber();
  body = testData.cartNewBody;
  body['session_id'] = session;
  return body;
};

var bodyAddItemCart = function() {
  var session = common.randomNumber();
  body = testData.addItemBody;
  body['session_id'] = session;
  return body;
};

var custString = {
  description: 'eCart - Cart Session',
  describeIt: {
    checkCreatenewSession: 'should create new session',
    checkAddItemCart: 'should add product to cart'
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
