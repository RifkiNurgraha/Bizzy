var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'hierarchy',                                     // ['bootstrap', 'hierarchy', 'foundation', 'simple']
        jsonFile: 'reports/phantomjs/cucumber_phantomjs.json',        // json file of cucumber report
        output: 'reports/phantomjs/cucumber_report_phantomjs.html',   // report output *.html
        reportSuiteAsScenarios: true,
        launchReport: true,                                     //T rue for automatically open in browser
        metadata: {
            "Test Browser":"PhantomJS",
            "Test Environment": "STAGING",
            "Parallel": "Scenarios",
        }
    };

    reporter.generate(options);                         //generate report
