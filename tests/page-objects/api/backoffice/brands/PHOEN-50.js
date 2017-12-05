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
          api.post(brandsPath + '/create')
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

  module.exports = {
    getBrands: getBrands,
    postCreateBrands:postCreateBrands,
    getBrandsWithoutAuth:getBrandsWithoutAuth,
    getBrandsWithoutType:getBrandsWithoutType
    // postCustomer: postCustomer
  };
