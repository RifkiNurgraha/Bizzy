const should = require('chai').should();
const expect = require('chai').expect;
var industry = require('./../../page-objects/api/growth/list_industry.js');
const testData = require('./../../helper/test_data_growth.js');

var industryPath = "/industry"

var customCase = {
    it1 : 'get list of industry'
}

industry.getListOfIndustry(customCase.it1,industryPath,function(response){
    expect(response.status).to.equal(200)
    expect(response.body).to.have.property("data");
})