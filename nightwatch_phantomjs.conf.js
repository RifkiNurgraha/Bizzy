const seleniumServer = require('selenium-server');  //selenium server package
var phantomjs = require('phantomjs-prebuilt')       //selenium phantomsjs driver
const env = require('dotenv').config();

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    // '--require', 'tests/helper/hooks.js',
    '--require', 'tests/step_definitions',                          //include step_definitions folder
    '--format', 'json:reports/phantomjs/cucumber_phantomjs.json',   //include cucumber.json folder
    '--format', 'node_modules/cucumber-pretty',                     //print nice looking cucumber in console
    'tests/features']
});

module.exports = {
  test_workers: {                                   //for paralel test
    enabled: true,
    workers: 8
  },
  page_objects_path: 'tests/page-objects',          //page object options
  output_folder: 'reports',                         //output reports
  custom_assertions_path: '',
  live_output: true,                                //live console output
  disable_colors: false,                            //scenarios colors
  selenium: {                                       //selenium settings
    start_process: true,
    server_path: seleniumServer.path,
    log_path: 'logs',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    phantomjs: {
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots'
      },
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled : true,
        acceptSslCerts : true,
        'phantomjs.binary.path': './node_modules/phantomjs-prebuilt/bin/phantomjs',
        'phantomjs.page.settings.userAgent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
      }
    }
  }
};
