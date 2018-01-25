
const expect = require('chai').expect;
const common = require('./../helper/common.js');
const testData = require('./../helper/testData.js');
var catalogSession = require('./../page-objects/api/boCatalogBrands.js');

var bodyLogin = function() {
    body = testData.loginData;
    return body;
};

before(function (done) {
    catalogSession.postToken(bodyLogin(), function (response) {
        expect(response.status).to.equal(200);
        common.setToken(response.body.token);
        done ();
    });
});