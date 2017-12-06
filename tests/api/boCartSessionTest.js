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

const supertest = require('supertest');
var api = supertest(process.env.API_BASE_URL_BO);

var cartSessionPath = {
    newCart : "/cart/new",
    addItemCart : "/cart/additem",
    cartDetails : "/cart/detail"
};

describe('eCart Session Test', function () {
  
  var getEcartDetails = {
    "sessionId" : ""
  }

  // before(function (done) {
  //   // Create new cart
  //   cartSession.postNewCart(bodyCartNew(), custString.describeIt.checkCreatenewSession, 'correct_token', function(response) {
  //     expect(response.status).to.equal(200);
  //     expect(response.body.message).to.contain("Success Create Cart");
  //   });

  //    // Add item to cart
  //   cartSession.postAddItemCart(bodyAddItemCart(), custString.describeIt.checkAddItemCart, 'correct_token', function(response) {
  //     expect(response.status).to.equal(200);
  //     expect(response.body.message).to.contain("Success Add Item To Cart");
  //     getEcartDetails.sessionId = response.body.data.session_id;
  //   });
  // });
  
  // // Get Details Cart by Session
  // cartSession.getCartBySession (getEcartDetails.sessionId, custString.describeIt.getDetailsCartBySession, 'correct_token', function (response) {
  //   expect(response.status).to.equal(200);
  // });

  before(function(done) {
    api.post(cartSessionPath.newCart)
    .set('Authorization', common.bearer('correct_token'))
    .set('Accept', 'application/json')
    .send(bodyCartNew())
    .end(function(err, result) {
      getEcartDetails.sessionId = result.body.data.session_id;  
      done();
    })
  });

  it (custString.describeIt.checkAddItemCart, function (done) {
    api.get (cartSessionPath.cartDetails+'/'+getEcartDetails.sessionId)
    .set ('Authorization', common.bearer('correct_token'))
    .set('Accept', 'application/json')
    .end(function(err, result) {
      console.log(result.body.data);
      done(err);
    })  
  })

});

