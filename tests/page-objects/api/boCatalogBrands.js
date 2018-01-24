const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO_TEST);
var common = require ('./../../helper/common.js');

var catalogSessionPath = {
    catalogBrands: "/catalog/brands",
};

var getCatalog = function (sessionId, tokenSelection, response) {
    console.log("HALOOO");
    console.log(process.env.API_BASE_URL_BO_TEST+catalogSessionPath.catalogBrands+'/'+sessionId);
    api.get (catalogSessionPath.catalogBrands+'/'+sessionId)
    .set('Authorization', common.catalogtest(tokenSelection))
    .set('Content-Type', 'application/json')
    .end(function(result) {
      response(result);
    })  
};


module.exports = {
    getCatalog:getCatalog
}