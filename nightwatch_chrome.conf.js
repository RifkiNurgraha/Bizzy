const seleniumServer = require('selenium-server');  //selenium server package
const chromedriver = require('chromedriver');       //seleniium chrome driver
const env = require('dotenv').config();

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    // '--require', 'tests/helper/hooks.js',
    '--require', 'tests/step_definitions',          //include step_definitions folder
    '--format', 'json:reports/chrome/cucumber_chrome.json',       //include cucumber.json folder
    '--format', 'node_modules/cucumber-pretty',     //print nice looking cucumber in console
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
    server_path: './lib/selenium-server-standalone-3.7.1.jar',
    log_path: 'logs',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {                                      //default test settings
      launch_url: process.env.BASE_URL,
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots'
      },
    },
    chrome: {                                       //chrome settins
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          args: [
            'headless',                             //for running chrome headless
            'window-size=1280,800'
          ]
        },
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': './lib/chromedriver'
        }
      }
    }
  }
};
