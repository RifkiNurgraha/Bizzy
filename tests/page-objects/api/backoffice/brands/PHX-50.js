const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();
var api = supertest(process.env.API_PHOEN_BASE_URL);
var common = require ('./../../../../helper/common.js');

var brandsPath = "/backoffice/brands";

//create brands
var postCreateBrands = function(body, description, describeIt, tokenSelection, response) {
    describe('POST /create', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.post(brandsPath)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .send(body)
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
  };

//create brand 2
var createBrand2 = function(body, tokenSelection,response) {
  api.post(brandsPath)
    .set('Authorization', common.bearer(tokenSelection))
    .set('Accept', 'application/json')
    .send(body)
    .end(function(err, result) {
      response(result);
  })
}
//get brand 2
var getBrands2 = function(brandID, tokenSelection, response){
  api.get(brandsPath + '/' + brandID)
    .set('Authorization', common.bearer(tokenSelection))
    .set('Accept', 'application/json')
    .end(function(err, result) {
      response(result);
  })
}

//update brand 2
var updateBrand2 = function(brandID, body, tokenSelection, response){
  api.put(brandsPath + '/' + brandID)
  .set('Authorization', common.bearer(tokenSelection))
  .set('Accept', 'application/json')
  .send(body)
  .end(function(err, result) {
    response(result);
})
}
//delete brand 2
var deleteBrand2 = function(brandID,tokenSelection, response){
  api.delete(brandsPath + '/' + brandID)
  .set('Authorization', common.bearer(tokenSelection))
  .set('Accept', 'application/json')
  .end(function(err, result) {
    response(result);
})
}
 
//get brands
var getBrands = function(brandID, description, describeIt, tokenSelection, response) {
    describe('GET /backoffice/brands', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(brandsPath + '/' + brandID)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
};
//get brands list
var getBrandsList = function(search, page, limit, description, describeIt, tokenSelection, response) {
    describe('GET /backoffice/brands', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(brandsPath)
            .query({search:search, page:page, limit:limit})
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
};

var getBrandsWithoutAuth = function(brandID, description, describeIt,  response) {
    describe('GET /backoffice/brands', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(brandsPath + '/' + brandID)
            .set('Accept', 'application/json')
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
};

var getBrandsWithoutType = function(brandID, description, describeIt, tokenSelection, response) {
    describe('GET /backoffice/brands', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(brandsPath + '/' + brandID)
            .set('Authorization', common.bearer(tokenSelection))
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
};

// //delete brands
var postDeleteBrands = function(body, deleteBrand, description, describeIt, tokenSelection, response) {
    describe('DELETE /backoffice/brands', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.del(brandsPath + '/' + deleteBrand)
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .send(body)
            .end(function(err, result) {
              response(result);
              done(err);
          })
        })
      })
    })
  };

  module.exports = {
    getBrands: getBrands,
    postCreateBrands:postCreateBrands,
    getBrandsWithoutAuth:getBrandsWithoutAuth,
    getBrandsWithoutType:getBrandsWithoutType,
    getBrandsList:getBrandsList,
    postDeleteBrands:postDeleteBrands,
    createBrand2:createBrand2,
    getBrands2:getBrands2,
    updateBrand2:updateBrand2,
    deleteBrand2:deleteBrand2
  };
