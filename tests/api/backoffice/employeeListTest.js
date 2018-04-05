const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../../helper/common.js');
const testDataEmp = require('./../../helper/testData.js');
var employee = require('./../../page-objects/api/backoffice/employee')

var testScenario = {
    testSuiteEmployeeList: {
        describe: 'Employee Management list',
        describe1: 'Employee Management list - search employee name by user sales',
        itGetListAll: 'should get list all employee',
        itSearchByName: 'should search employee by name',
        itSearchByEmail: 'should search employee by email',
        itFilterByTeamLeader: 'should filter by Leadership team',
        itFilterByTeamTech: 'should filter by Technology team',
        itFilterByTeamPop: 'should filter by POP team',
        itFilterByTeamSales: 'should filter by Sales team',
        itSortByName: 'should sort Nama Karyawan Asc',
        itSortByTeam: 'should sort Team Asc',
        itSortByJabatan: 'should sort Jabatan Asc',
        itCheckPaging: 'should check paging'
    }
};

var q = testDataEmp.getEmployeeList;

describe ('@backoffice '+testScenario.testSuiteEmployeeList.describe, function () {
    var token;
    before (function(done){
        common.getAuthTokenlogin(common.bodyLogin('Admin'),function(resp){
            expect(resp.status).to.equal(200);
            token = resp.body.token;
            done ();
        })
    });
    it (testScenario.testSuiteEmployeeList.itGetListAll, function (done) {
        employee.getEmployeeList ('', '', q.sort_asc, q.team_id, '', 1, 100, token, function (test){
            expect (test.status).to.equal (200);
            expect (test.body.meta.total_data).not.equal (0);
            done();
        })
    });
    it (testScenario.testSuiteEmployeeList.itSearchByName, function(done){
        employee.getEmployeeList(q.employee_name,'',q.sort_asc,q.team_id,'',1,10, token, function(resp){
            expect (resp.status).to.equal (200);
            console.log(resp.body.data);
            expect (resp.body.meta.total_data).to.not.equal (0);
            done();
        })
    });
});
describe ('@backoffice '+testScenario.testSuiteEmployeeList.describe1, function () {
    var token;
    before (function(done){
        common.getAuthTokenlogin(common.bodyLogin('salesAdmin'),function(resp){
            expect(resp.status).to.equal(200);
            token = resp.body.token;
            done ();
        })
    });
    it (testScenario.testSuiteEmployeeList.itSearchByName, function(done){
        employee.getEmployeeList(q.employee_name,'',q.sort_asc,q.team_id,'',1,10, token, function(resp){
            expect (resp.status).to.equal (200);
            console.log(resp.body.data);
            expect (resp.body.meta.total_data).to.not.equal (0);
            done();
        })
    });
});