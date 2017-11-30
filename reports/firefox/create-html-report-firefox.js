var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'hierarchy',                                         //['bootstrap', 'hierarchy', 'foundation', 'simple']
        jsonFile: 'reports/firefox/cucumber_firefox.json',          //json file of cucumber report
        output: 'reports/firefox/cucumber_report_firefox.html',     //report output *.html
        reportSuiteAsScenarios: true,
        launchReport: true,                                         //True for automatically open in browser
        metadata: {
            "Test Browser":"Firefox",
            "Test Environment": "STAGING",
            "Parallel": "Scenarios",
        }
    };

    reporter.generate(options);                             //generate report
