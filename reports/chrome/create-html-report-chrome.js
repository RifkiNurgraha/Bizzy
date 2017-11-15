var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'hierarchy',                                     // ['bootstrap', 'hierarchy', 'foundation', 'simple']
        jsonFile: 'reports/chrome/cucumber_chrome.json',        // json file of cucumber report
        output: 'reports/chrome/cucumber_report_chrome.html',   // report output *.html
        reportSuiteAsScenarios: true,
        launchReport: true,                                     //T rue for automatically open in browser
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "STAGING",
            "Parallel": "Scenarios",
        }
    };

    reporter.generate(options);                         //generate report
