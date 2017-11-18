const seleniumServerPath = './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.7.1.jar';
const chromedriverPath = './node_modules/chromedriver/lib/chromedriver/chromedriver';
const geckodriverPath = './node_modules/geckodriver/geckodriver';
const cmd = require('node-cmd');

var checkChromeDriver = function() {
  require('fs').stat(chromedriverPath, function (err, stat) {
    if (err || !stat || stat.size < 1) {
      console.log('Checking ChromeDriver');
        cmd.get(
        'npm install chromedriver --save-dev',
        function(err, data, stderr){
            console.log(data);
            console.log(stderr);
        }
      );
    }
  });
};

var checkGeckoDriver = function() {
  require('fs').stat(geckodriverPath, function (err, stat) {
    if (err || !stat || stat.size < 1) {
        console.log('Checking GeckoDriver');
        cmd.get(
        'npm install geckodriver --save-dev',
        function(err, data, stderr){
            console.log(data);
            console.log(stderr);
        }
      );
    }
  });
};

var checkSeleniumServer = function() {
  require('fs').stat(seleniumServerPath, function (err, stat) {
    if (err || !stat || stat.size < 1) {
        console.log('Checking Selenium Server');
        cmd.get(
        'npm install selenium-server --save-dev',
        function(err, data, stderr){
            console.log(data);
            console.log(stderr);
        }
      );
    }
  });
};

// require('fs').stat(BINPATH + 'chromedriver', function (err, stat) { // got it?
//   if (err || !stat || stat.size < 1) {
//     require('selenium-download').ensure(BINPATH, function(error) {
//       if (error) throw new Error(error); // no point continuing so exit!
//       console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
//     });
//   }
// });

// var checkChromedriver = function() {
//     console.log('=============================');
//     cmd.get('npm install chromedriver --save', function(err, data, stdout){
//       console.log(stdout);
//       console.log(data);
//   });
//     console.log('=============================');
// }

checkChromeDriver();
checkGeckoDriver();
checkSeleniumServer();