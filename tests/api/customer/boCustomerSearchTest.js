const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../../helper/common.js');
var customerSearch = require('./../../page-objects/api/customer/boCustomerSearch.js');

var custSearchData = {
  testData: {
    custSearch1 : "ardi",
    custSearch2 : "Bizzy Indonesia",
    custSearch3 : "Merchant ILDAV",
    custSearch4 : "mnbv"
  },
  testResult: {
    custResult1 : "PT Fahmi Ardi CCI",
    custResult2 : "Bizzy Indonesia",
    custResult3 : "Merchant ILDAV",
    custError : "no data specified"
  }
};

var custSearchString = {
  description: 'eCart - Search Customber By',
  describeIt: {
    partialName: 'should search by partial name',
    fullName: 'should search by full customer name',
    altName: 'should search by alternative customer name',
    unspecifiedData: 'should get response message for unspecified data'
  }
};

// GET /customer/search with partial name
customerSearch.getCustomerSearch(custSearchData.testData.custSearch1, custSearchString.description, custSearchString.describeIt.partialName, 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.data[0].company_name).to.contain(custSearchData.testResult.custResult1);
});

// GET /customer/search with full name
customerSearch.getCustomerSearch(custSearchData.testData.custSearch2, custSearchString.description, custSearchString.describeIt.fullName, 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.data[0].company_name).to.contain(custSearchData.testResult.custResult2);
});

// GET /customer/search with alternative name
customerSearch.getCustomerSearch(custSearchData.testData.custSearch3, custSearchString.description, custSearchString.describeIt.altName, 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.data[0].company_name).to.contain(custSearchData.testResult.custResult3);
});

// GET /customer/search with unspecified data
customerSearch.getCustomerSearch(custSearchData.testData.custSearch4, custSearchString.description, custSearchString.describeIt.unspecifiedData, 'icorrect_token', function(response) {
  expect(response.status).to.equal(200);
  expect(response.body.message).to.contain(custSearchData.testResult.custError);
});
