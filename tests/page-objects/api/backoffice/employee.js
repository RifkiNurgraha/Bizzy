// const should = require('chai').should();
// const expect = require('chai').expect;
const supertest = require('supertest');
// const env = require('dotenv').config();


var api = supertest(process.env.API_BASE_URL_BO_DEV);
var common = require('./../../../helper/common.js');

var employeePath= "/employees";

var getEmployeeList = function (searchBy, sortBy, sortMtd, teamId, teamName, pg, lmt, tokenSelection, response) {
    api.get(employeePath)
        .query({
            search: searchBy,
            sort_by: sortBy,
            team_id: teamId,
            team_name: teamName,
            sort: sortMtd,
            page: pg,
            limit: lmt
        })  
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', tokenSelection)
        .end(function(err, result) {
            response (result);
        });
};

module.exports = {
    getEmployeeList: getEmployeeList
};