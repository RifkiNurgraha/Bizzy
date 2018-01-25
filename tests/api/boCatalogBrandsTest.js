const should = require('chai').should();
const expect = require('chai').expect;
const param = require('chai').param;
const common = require('./../helper/common.js');
const testData = require('./../helper/testData.js');
var catalogSession = require('./../page-objects/api/boCatalogBrands.js');
     
var totaldata = 0;

var catalogSearchData = {
    testData1: {
        search : "",
        page : "1",
        limit : totaldata,
    }
};

var catalogString = {
    description: 'eCatalog - Catalog Session',
    describeIt: {
        getCatalog1: 'should get List Catalog (page = 1, limit = 20)',
        getCatalog2: 'should get List Catalog (id + name) in all data',
        getCatalog3: 'should get List Catalog (page = '+ catalogSearchData.testData1.page +', limit = totaldata)'
    }
};

// test using before it
describe('@tata ' + 'POST GET /customer using it', function() {
    
    describe(catalogString.description, function () {
        
        //scenario1
        it(catalogString.describeIt.getCatalog1, function (done) {
            catalogSession.getCatalog('correct_token', function (response) {
                expect(response.status).to.equal(200);
                expect(response.body.meta.page).to.equal(1);
                expect(response.body.meta.limit).to.equal(20);
                totaldata = response.body.meta.total_data;
                done ();
            });
        });
    });

    describe(catalogString.description, function () {
     
        before(function (done) {
            catalogSession.getCatalog('correct_token', function (response) {
                expect(response.status).to.equal(200);
                expect(response.body.meta.page).to.equal(1);
                expect(response.body.meta.limit).to.equal(20);
                totaldata = response.body.meta.total_data;
                done ();
            });
        });
  
        //scenario1
        it(catalogString.describeIt.getCatalog2, function (done) {
            console.log("total data : "+ totaldata);
            catalogSession.getCatalogParam(catalogSearchData.testData1.search, catalogSearchData.testData1.page, 
                totaldata, 'correct_token', function (response) {
                    expect(response.status).to.equal(200);
                    expect(response.body.meta.page).to.equal(parseInt(catalogSearchData.testData1.page));
                    expect(response.body.meta.limit).to.equal(parseInt(totaldata));

                    //console.log(response.body.data);
                    for(var i = 0; i < response.body.data.length; i++){
                        expect(response.body.data[i]).to.include.any.keys('id', 'name');
                    }

                    done ();
            });
        });

        //scenario2
        it(catalogString.describeIt.getCatalog3, function (done) {
            console.log("total data : "+ totaldata);
            catalogSession.getCatalogParam(catalogSearchData.testData1.search, catalogSearchData.testData1.page, 
                totaldata, 'correct_token', function (response) {
                    expect(response.status).to.equal(200);
                    expect(response.body.meta.page).to.equal(parseInt(catalogSearchData.testData1.page));
                    expect(response.body.meta.limit).to.equal(parseInt(totaldata));
                    done ();
                });
        });
    });  
})