const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_PHOENIX_DEV);

var registrationPath = {
    new : "/registration/new",
    activate : "/registration/activate"
};

var postRegisterAccount = function(customCase,body,response){
    describe('Account Registration', function(){
        it(customCase, function(done){
            api.post(registrationPath.new)
            .set('Content-Type','application/json')
            .send(body)
            .end(function(err, result){
                response(result);
                done(err);
            })
        })
    })
}

module.exports = {
    postRegisterAccount: postRegisterAccount
}