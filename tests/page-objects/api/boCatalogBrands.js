const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO_TEST);
var common = require ('./../../helper/common.js');

var catalogSessionPath = {
    catalogBrands: "/catalog/brands",
};

var getCatalog = function (tokenSelection, response) {
    api.get (catalogSessionPath.catalogBrands)
    .set('Authorization', common.catalogtest(tokenSelection))
    .set('Content-Type', 'application/json')
    .end(function(err, result) {
      response(result);
    })  
};

var getCatalogParam = function (catalogSearch_search, catalogSearch_page, catalogSearch_limit, tokenSelection, response) {
    api.get (catalogSessionPath.catalogBrands)
    .query({search: catalogSearch_search, page: catalogSearch_page, limit: catalogSearch_limit})
    .set('Authorization', common.catalogtest(tokenSelection))
    .set('Content-Type', 'application/json')
    .end(function(err, result) {
      response(result);
    })  
};

module.exports = {
    getCatalog:getCatalog,
    getCatalogParam:getCatalogParam
}