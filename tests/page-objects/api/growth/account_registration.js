const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_PHOENIX_DEV);

var registrationPath = {
    new : "/registration/new",
    activate : "/registration/activate"
};

var postRegisterExistingEmail = function(body,response){
    describe('Account Registration - Existing email', function(){
        it('cannot register using existing email', function(done){
            api.post(registrationPath.new)
            .set('Accept','application/json')
            .send(body)
            .end(function(err, result){
                response(result);
                done(err);
            })
        })
    })
}

module.exports = {
    postRegisterExistingEmail: postRegisterExistingEmail
}