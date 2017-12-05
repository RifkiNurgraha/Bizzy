const should = require('chai').should();
const expect = require('chai').expect;
var account = require('./../../page-objects/api/growth/account_registration.js');
const testData = require('./../../helper/test_data_growth.js');

account.postRegisterAccount(testData.existingAccountData,function(response){
    expect(response.status).to.equal(201)
    expect(response.body.success).to.equal(false)
    expect(response.body.message).to.equal("Email sudah terdaftar")
});