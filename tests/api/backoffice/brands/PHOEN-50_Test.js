const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../../../helper/common.js');
const testData = require('./../../../helper/testData.js');
var brands = require('./../../../page-objects/api/backoffice/brands/PHOEN-50.js');

var brandID = common.randomBrandId();

var brandsString = {
  description:{
    createBrand : 'Create Brand',
    createBrandWithInvalidToken : 'Create Brand with invalid token',
    getBrandDetails:'Get Brand details',
    getAllBrand: 'Get All Brands',
    deleteBrand :'Delete Brand',
    withoutAuthGetBrand: 'Request Get Brand without Auth token',
    withoutTypeGetBrand: 'Request Get Brand without Application Type'
  },
  describeIt: {
    checkData: 'should get brand details',
    checkBrandWithInvalidToken : 'Should not allowed create Brand with invalid token',
    checkMandatory: 'should check all mandatory fields',
    checkCreated: 'brand should be created',
    checkDuplicate: 'brand should be not created',
    checkDeletedBrand: 'brand should be deleted',
    checkwithoutAuthGetBrand: 'should be give error 401',
    checkwithoutTypeGetBrand: 'should be give error 405'
  }
};

// var bodyNew = function() {
//   var npwp = common.randomNumber();
//   body = testData.customerBody;
//   body['data']['customer']['npwp'] = npwp;
//   body['data']['addresses'][0]['npwp'] = npwp;
//   return body;
// }

// // POST /create brand
// brands.postCreateBrands(testData.createBrandBody, brandsString.description.createBrand, brandsString.describeIt.checkCreated, 'correct_token', function(response){
//   expect(response.status).to.equal(200);
//   expect(response.body.name).to.equal(testData.createBrandBody['name']);
// });

// // POST /create duplicate brand
// brands.postCreateBrands(testData.createBrandBody, brandsString.description.createBrand, brandsString.describeIt.checkDuplicate, 'correct_token', function(response){
//     expect(response.status).to.equal(404);
//     expect(response.body.message).to.equal(testData.checkDuplicateBrandBody['message']);
// });

//GET .../brands/brandId
brands.getBrands(brandID, brandsString.description.getBrandDetails, brandsString.describeIt.checkData , 'correct_token',function(response){
    expect(response.status).to.equal(200);
    return response;
}); 

//GET .../brands/brandId with invalid token
brands.getBrands(brandID, brandsString.description.createBrandWithInvalidToken, brandsString.describeIt.checkBrandWithInvalidToken, 'incorrect_token',function(response){
    expect(response.status).to.equal(401);
    return response;
}); 

//GET .../brands/brandId without Auth Token
brands.getBrandsWithoutAuth(brandID, brandsString.description.getBrandDetails, brandsString.describeIt.checkData, function(response){
    expect(response.status).to.equal(401);
    return response;
});

//GET .../brands/brandId without Application type
brands.getBrandsWithoutType(brandID, brandsString.description.withoutTypeGetBrand, brandsString.describeIt.checkwithoutTypeGetBrand, 'correct_token', function(response){
    expect(response.status).to.equal(405);
    return response;
});



// //GET /customer => check mandatory data
// customer.getCustomer(customerID, custString.description, custString.describeIt.checkMandatory, 'correct_token', function(response) {
//   var cust = response.body.data[0].customer;
//   var addr = response.body.data[0].addresses[0];

//   expect(response.status).to.equal(200);
//   expect (cust).to.have.property("name");
//   expect (cust.name).to.not.equal(null);
//   expect (cust.npwp).to.not.equal(null);
//   expect (cust.customer_type).to.not.equal(null);
//   expect (cust.account_manager).to.not.equal(null);
//   expect (cust.virtual_account).to.not.equal(null);
//   if (cust.invoice_type == "1") {
//       expect (cust.telephone_number).to.not.equal(null);
//   }

//   expect (addr.city).to.not.equal(null);
//   expect (addr.street1).to.not.equal(null);
//   expect (addr.district).to.not.equal(null);
//   expect (addr.subdistrict).to.not.equal(null);
//   expect (addr.postcode).to.not.equal(null);
// });
