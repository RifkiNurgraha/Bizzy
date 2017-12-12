const expect = require('chai').expect;
const common = require('./../helper/common.js');
const testData = require('./../helper/testData.js');
var activityLog = require('./../page-objects/api/activityLog.js');

var testScenario = {
    description: 'Activity Logs',
    shouldTest: {
        createBoActivity: 'should create back office activity',
        createGrowthActivity: 'should create growth activity',
        createEprocActivity: 'should create eproc activity',
        createSourcingActivity: 'should create sourcing activity',
        createPurchaseActivity: 'should create purchase activity',
        createPostPurchaseActivity: 'should create post purchase activity' 
    }
};

var bodyPostActivity = function (sourceId, actionId) {
    body = testData.addActivityLog;
    body['source'] = sourceId;
    body['action'] = actionId;
    return body;
};

describe(testScenario.description, function () {
    it (testScenario.shouldTest.createBoActivity, function (done) {
        activityLog.postActivityLog (bodyPostActivity ('1', '1'), 'correct_token', function (response) {
            expect(response).to.equal(200);
        });
        done ();
    });
});