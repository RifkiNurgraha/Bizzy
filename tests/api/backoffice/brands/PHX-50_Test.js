const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../../../helper/common.js');
const testData = require('./../../../helper/testData.js');
var brands = require('./../../../page-objects/api/backoffice/brands/PHX-50.js');


var brandID = common.randomBrandId();
var search = 'ac';
var page = 1;
var limit = 20;
var deleteBrand = 2000;



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
    checkAllBrand: '20 Brands at page 1 will be displayed',
    checkBrandWithInvalidToken : 'Should not allowed',
    checkMandatory: 'should check all mandatory fields',
    checkCreated: 'brand should be created',
    checkDuplicate: 'brand should be not created',
    checkDeletedBrand: 'brand should be deleted',
    checkwithoutAuthGetBrand: 'should be give error 401',
    checkwithoutTypeGetBrand: 'should be give error 405'
  }
};

// // POST /create brand
// brands.postCreateBrands(testData.createBrandBody, brandsString.description.createBrand, brandsString.describeIt.checkCreated, 'correct_token', function(response){
//     console.log(response.body);
//     expect(response.status).to.equal(201);
//     expect(response.body.name).to.equal(testData.createBrandBody['name']);
// });

// // POST /create duplicate brand
// brands.postCreateBrands(testData.createBrandBody, brandsString.description.createBrand, brandsString.describeIt.checkDuplicate, 'correct_token', function(response){
//     expect(response.status).to.equal(404);
//     expect(response.body.message).to.equal(testData.checkDuplicateBrandBody['message']);
// });

//GET .../brands/brandId
brands.getBrands(brandID, brandsString.description.getBrandDetails, brandsString.describeIt.checkData , 'correct_token',function(response){
    console.log(response.body);
    expect(response.status).to.equal(200);
    return response;
}); 

// //GET .../brands/brands
// brands.getBrandsList(search, page, limit, brandsString.description.getAllBrand, brandsString.describeIt.checkAllBrand , 'correct_token',function(response){
//     console.log(response.body);
//     expect(response.status).to.equal(200);
//     return response;
// }); 

// //GET .../brands/brandId with invalid token
// brands.getBrands(brandID, brandsString.description.createBrandWithInvalidToken, brandsString.describeIt.checkBrandWithInvalidToken, 'incorrect_token',function(response){
//     console.log(response.body);
//     expect(response.status).to.equal(401);
//     return response;
// }); 

// //GET .../brands/brandId without Auth Token
// brands.getBrandsWithoutAuth(brandID, brandsString.description.withoutAuthGetBrand, brandsString.describeIt.checkwithoutAuthGetBrand, function(response){
//     console.log(response.body);
//     expect(response.status).to.equal(401);
//     return response;
// });

// //GET .../brands/brandId without Application type
// brands.getBrandsWithoutType(brandID, brandsString.description.withoutTypeGetBrand, brandsString.describeIt.checkwithoutTypeGetBrand, 'correct_token', function(response){
//     console.log(response.body);
//     expect(response.status).to.equal(405);
//     return response;
// });

// // POST /delete brand
// brands.postDeleteBrands(testData.createBrandBody, deleteBrand, brandsString.description.deleteBrand, brandsString.describeIt.checkDeletedBrand, 'correct_token', function(response){
//     console.log(response.body);
//     expect(response.status).to.equal(204);
// });


