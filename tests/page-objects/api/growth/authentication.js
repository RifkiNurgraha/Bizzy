const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_PHOENIX_DEV);

var authenticationPath = {
    auth : "/oauth/token",
};

var postAuthenticateAccount = function(body,response){
    describe('Authentication Account', function(){
        it('can login successfully', function(done){
            api.post(authenticationPath.auth)
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
    postAuthenticateAccount: postAuthenticateAccount
}