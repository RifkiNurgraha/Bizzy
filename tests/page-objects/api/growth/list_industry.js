const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_PHOENIX_DEV);

var getListOfIndustry = function(customCase,industryPath,response){
    describe('Industry', function(){
        it(customCase, function(done){
            api.get(industryPath)
            .set('Content-Type','application/json')
            .set('Accept','application/json')
            .end(function(err, result){
                response(result);
                done(err);
            })
        })
    })
}

module.exports = {
    getListOfIndustry: getListOfIndustry
}