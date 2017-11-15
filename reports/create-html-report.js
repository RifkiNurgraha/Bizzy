var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'hierarchy',                       //['bootstrap', 'hierarchy', 'foundation', 'simple']
        jsonFile: 'reports/cucumber.json',        //json file of cucumber report
        output: 'reports/cucumber_report.html',   //report output *.html
        reportSuiteAsScenarios: true,
        launchReport: true,                      //True for automatically open in browser
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "STAGING",
            "Parallel": "Scenarios",
        }
    };

    reporter.generate(options);                   //generate report
