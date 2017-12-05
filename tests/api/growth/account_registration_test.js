const should = require('chai').should();
const expect = require('chai').expect;
var account = require('./../../page-objects/api/growth/account_registration.js');
const testData = require('./../../helper/test_data_growth.js');

var customCase = {
    it1 : 'cannot register using existing email',
    it2 : 'can register using new email'
}

account.postRegisterAccount(customCase.it1,testData.existingAccountData,function(response1){
    expect(response1.status).to.equal(201)
    expect(response1.body.success).to.equal(false)
    expect(response1.body.message).to.equal("Email sudah terdaftar")
});


account.postRegisterAccount(customCase.it2,testData.newAccountData,function(response){
    expect(response.status).to.equal(201)
    expect(response.body.success).to.equal(true)
    expect(response.body.message).to.equal("Registrasi anda berhasil")
})