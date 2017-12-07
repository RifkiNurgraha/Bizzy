const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../../../helper/common.js');
const testData = require('./../../../helper/testData.js');
var brands = require('./../../../page-objects/api/backoffice/brands/PHX-50.js');


var brandID = common.randomBrandId();
var search = 'ac';
var page = 1;
var limit = 20;


var brandsString = {
  description:{
    createBrand : 'Create Brand',
    createBrandWithInvalidToken : 'Create Brand with invalid token',
    getBrandDetails:'Get Brand details',
    getAllBrand: 'Get All Brands',
    updateBrand:'Update brand name',
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
    checkUpdateBrand:'Brand name should be updated',
    checkDuplicate: 'brand should be not created',
    checkDeletedBrand: 'brand should be deleted',
    checkwithoutAuthGetBrand: 'should be give error 401',
    checkwithoutTypeGetBrand: 'should be give error 405'
  }
};

//CRUD brands

describe('CRUD /backoffice/brands', function() {
  var iDBrand = 0
  var brandName = ""
// create brand 2
  describe(brandsString.description.createBrand, function() {
    it(brandsString.describeIt.checkCreated, function(done){
      brands.createBrand2(testData.createBrandBody,'correct-token', function(response){
        iDBrand = response.body.id;
        brandName = response.body.name;
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(testData.createBrandBody['name']);
        done();
      })
    });
  });
//read brand 2
  describe(brandsString.description.getBrandDetails, function() {
    it(brandsString.describeIt.checkData, function(done){
      brands.getBrands2(iDBrand,'correct-token', function(response){
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(iDBrand);
        expect(response.body.name).to.equal(brandName);
        done();
      })
    });
  });
// update brand 2
  describe(brandsString.description.updateBrand, function(){
    it(brandsString.describeIt.checkUpdateBrand, function(done){
      brands.updateBrand2(iDBrand, testData.updateBrandName,'correct-token',function(response){
        expect(response.status).to.equal(200);
        done();
      })
    })
  })

//delete brand 2
  describe(brandsString.description.deleteBrand, function(){
    it(brandsString.describeIt.checkDeletedBrand, function(done){
      brands.deleteBrand2(iDBrand,'correct-token',function(response){
        expect(response.status).to.equal(204);
        done();
      })
    })
  })
})


// // POST /create duplicate brand
brands.postCreateBrands(testData.createBrandBody, brandsString.description.createBrand, brandsString.describeIt.checkDuplicate, 'correct_token', function(response){
    expect(response.status).to.equal(400);
    expect(response.body.message).to.equal(testData.checkDuplicateBrandBody['message']);
});

//GET .../brands/brandId random
brands.getBrands(brandID, brandsString.description.getBrandDetails, brandsString.describeIt.checkData , 'correct_token',function(response){
    expect(response.status).to.equal(200);
    return response;
}); 

// //GET .../brands/brands
brands.getBrandsList(search, page, limit, brandsString.description.getAllBrand, brandsString.describeIt.checkAllBrand , 'correct_token',function(response){
    expect(response.status).to.equal(200);
    return response;
}); 

// //GET .../brands/brandId with invalid token
brands.getBrands(brandID, brandsString.description.createBrandWithInvalidToken, brandsString.describeIt.checkBrandWithInvalidToken, 'incorrect_token',function(response){
    expect(response.status).to.equal(401);
    return response;
}); 

// //GET .../brands/brandId without Auth Token
brands.getBrandsWithoutAuth(brandID, brandsString.description.withoutAuthGetBrand, brandsString.describeIt.checkwithoutAuthGetBrand, function(response){
    expect(response.status).to.equal(401);
    return response;
});

// //GET .../brands/brandId without Application type
brands.getBrandsWithoutType(brandID, brandsString.description.withoutTypeGetBrand, brandsString.describeIt.checkwithoutTypeGetBrand, 'correct_token', function(response){
    expect(response.status).to.equal(405);
    return response;
});




