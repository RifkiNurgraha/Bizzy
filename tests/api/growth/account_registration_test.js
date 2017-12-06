const should = require('chai').should();
const expect = require('chai').expect;
var account = require('./../../page-objects/api/growth/account_registration.js');
const testData = require('./../../helper/test_data_growth.js');

var registrationPath = {
    new : "/registration/new",
    activate : "/registration/activate"
}

var customCase = {
    it1 : 'cannot register using existing email',
    it2 : 'can register using new email',
    it3 : 'cannot activate using activated key',
    it4 : 'cannot activate using blank key'
}

account.postRegisterationAccount(customCase.it1,registrationPath.new,testData.existingAccountData,function(response){
    expect(response.status).to.equal(201)
    expect(response.body.success).to.equal(false)
    expect(response.body.message).to.equal("Email sudah terdaftar")
});

account.postRegisterationAccount(customCase.it2,registrationPath.new,testData.newAccountData,function(response){
    expect(response.status).to.equal(201)
    expect(response.body.success).to.equal(true)
    expect(response.body.message).to.equal("Registrasi anda berhasil")
});

account.postRegisterationAccount(customCase.it3,registrationPath.activate,testData.activatedKey,function(response){
    expect(response.status).to.equal(200)
    expect(response.body.success).to.equal(false)
    expect(response.body.message).to.equal("Kode Aktivasi tidak dikenal/sudah diaktivasi")
});

account.postRegisterationAccount(customCase.it4,registrationPath.activate,testData.blankKey,function(response){
    expect(response.status).to.equal(200)
    expect(response.body.success).to.equal(false)
    expect(response.body.message).to.equal("Kode Aktivasi tidak dikenal/sudah diaktivasi")
});