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

var custString = {
  description: 'eCart - Cart Session',
  describeIt: {
    checkCreatenewSession: 'should create new session',
    checkAddItemCart: 'should add product to cart',
    getDetailsCartBySession: 'should get detail eCart by Session'
  }
};

describe('eCart Session Test', function () {
  
  var getEcartDetails = {
    "sessionId" : ""
  }

  before(function (done) {
    // Create new cart
    cartSession.postNewCart(bodyCartNew(), 'correct_token', function(response) {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.contain("Success Create Cart");
      getEcartDetails.sessionId = response.body.data.session_id;
      done ();
    });
  });

  it(custString.describeIt.getDetailsCartBySession, function (done) {
    cartSession.getCartBySession (getEcartDetails.sessionId, 'correct_token', function (response) {
      expect(response.status).to.equal(200);
      done ();
    });
  });
  
 });

