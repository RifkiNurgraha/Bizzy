const fs = require('fs');
var reportJson = require('./../../reports/mochawesome/mochawesome.json');

var getSummaryTests = function() {
    return {
        stats: reportJson.stats
    }
}

var generateSummaryJsonFile = function() {
    var fileName = './reports/mochawesome/summary-test.json';
    var content = getSummaryTests();
    var isFileExists = fs.existsSync(fileName);
    
    if (isFileExists) {
        // Delete summary-test.json
        fs.unlinkSync(fileName);
    }

    // Create new summary-test.json based on new report
    fs.writeFileSync(fileName, JSON.stringify(content) + '\n'  , null , function(err) {
        if (err) {
            return console.log(err); 
        }

        console.log('Generate Summary JSON √');
    })
}

generateSummaryJsonFile();