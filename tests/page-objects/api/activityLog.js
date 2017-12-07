const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../helper/common.js');

var activityLogPath = {
    newCart : "/logs",
};

var postActivityLog = function (body, tokenSelection, response) {
    response = 200;
};

module.exports = {
    postActivityLog: postActivityLog
}