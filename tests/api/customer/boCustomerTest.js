const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../../helper/common.js');
const testData = require('./../../helper/testData.js');
var customer = require('./../../page-objects/api/customer/boCustomer.js');

var customerID = '120156';

var custString = {
  description: 'Get Customer Bizzy',
  describeIt: {
    checkData: 'should get customer data',
    checkMandatory: 'should check all mandatory fields',
    checkCreated: 'user should be created'
  }
};

var bodyNew = function() {
  var npwp = common.randomNumber();
  body = testData.customerBody;
  body['data']['customer']['npwp'] = npwp;
  body['data']['addresses'][0]['npwp'] = npwp;
  return body;
}

// POST /customer then GET /customer
customer.postCustomer(bodyNew(), custString.description, custString.describeIt.checkCreated, 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.firstname).to.equal(bodyNew()['data']['customer']['name']);
});

// GET /customer
customer.getCustomer(customerID, custString.description, custString.describeIt.checkData, 'correct_token', function(response) {
  console.log("=============");
  console.log(response.body);
  console.log("=============");
  expect(response.status).to.equal(200);
  expect(response.body.data[0].customer.name).to.equal('PT DJ 100306');;
  return response;
});

//GET /customer => check mandatory data
customer.getCustomer(customerID, custString.description, custString.describeIt.checkMandatory, 'correct_token', function(response) {
  var cust = response.body.data[0].customer;
  var addr = response.body.data[0].addresses[0];

  expect(response.status).to.equal(200);
  expect (cust).to.have.property("name");
  expect (cust.name).to.not.equal(null);
  expect (cust.npwp).to.not.equal(null);
  expect (cust.customer_type).to.not.equal(null);
  expect (cust.account_manager).to.not.equal(null);
  expect (cust.virtual_account).to.not.equal(null);
  if (cust.invoice_type == "1") {
      expect (cust.telephone_number).to.not.equal(null);
  }

  expect (addr.city).to.not.equal(null);
  expect (addr.street1).to.not.equal(null);
  expect (addr.district).to.not.equal(null);
  expect (addr.subdistrict).to.not.equal(null);
  expect (addr.postcode).to.not.equal(null);
});
