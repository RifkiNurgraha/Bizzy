const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../helper/common.js');
const testData = require('./../helper/testData.js');
var cartSession = require('./../page-objects/api/boCatalogBrands.js');

var custString = {
    description: 'eCatalog - Catalog Session',
    describeIt: {
      getCatalog: 'should get List Catalog'
    }
};
  
// test using before
describe('@tata ' + 'POST GET /customer using before', function() {
    describe(custString.description, function () {
      
        var getCatalogDetails = {
          "address" : ""
        }
      
        it(custString.describeIt.getCatalog, function (done) {
          cartSession.getCatalog (getCatalogDetails.address, 'correct_token', function (response) {
              console.log(response.body);
            expect(response.status).to.equal(200);
            done ();
          });
        });
    });  
})