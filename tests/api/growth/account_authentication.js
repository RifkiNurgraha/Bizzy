const should = require('chai').should();
const expect = require('chai').expect;
var account = require('./../../page-objects/api/growth/authentication.js');
const testData = require('./../../helper/test_data_growth.js');

account.postAuthenticateAccount(testData.authenticateData,function(response){
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property("user")
    expect(response.body.user).to.have.property("username")
    expect(response.body.user).to.have.property("firstName")
    expect(response.body.user).to.have.property("lastName")
    expect(response.body).to.have.property("token")
    expect(response.body).to.have.property("refreshToken")
    expect(response.body).to.have.property("refreshTokenExpiresAt")
    expect(response.body.user.username).to.equal("hannan@bizzy.com")
    expect(response.body.user.firstName).to.equal("hannan")
    expect(response.body.user.lastName).to.equal("bizzy")
    expect(response.body.token).to.not.be.empty
    expect(response.body.refreshToken).to.not.be.empty
    expect(response.body.refreshTokenExpiresAt).to.not.be.empty
});