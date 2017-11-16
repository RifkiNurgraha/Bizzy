const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const env = require('dotenv').config();

var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'test/report/cucumber_report.json',
        output: 'test/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

defineSupportCode(({BeforeAll, AfterAll}) => {
  BeforeAll(() => new Promise(resolve => {
    // function windowsSize(browser, done) {
    //   browser.resizeWindow(1280, 800, done);
    // };
    console.log(process.env.BASE_URL);
    setTimeout(() => {
      resolve();
    }, 5000);
  }));

  AfterAll(() => new Promise(resolve => {
    reporter.generate(options);
    setTimeout(() => {
      resolve();
    }, 5000);
  }));
})

// var {defineSupportCode} = require('cucumber');
//
// defineSupportCode(function({After, Before}) {
//   // Synchronous
//   Before(function () {
//     this.count = 0;
//   });
//
//   // Asynchronous Callback
//   Before(function (testCase, callback) {
//     var world = this;
//     tmp.dir({unsafeCleanup: true}, function(error, dir) {
//       if (error) {
//         callback(error);
//       } else {
//         world.tmpDir = dir;
//         callback();
//       }
//     });
//   });
//
//   // Asynchronous Promise
//   After(function () {
//     // Assuming this.driver is a selenium webdriver
//     return this.driver.quit();
//   });
// });
