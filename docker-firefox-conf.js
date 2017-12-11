const env = require('dotenv').config();

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    '--require', 'tests/step_definitions',                          //include step_definitions folder
    '--format', 'json:reports/firefox/cucumber_firefox.json',       //include cucumber.json folder
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
  test_settings : {
    default : {
      launch_url : process.env.BASE_URL,
      selenium_port  : 4443,
      selenium_host  : "172.17.0.1",
      screenshots : {
        enabled : true,
        on_failure : true,
        on_error : false,
        path : "screenshots"
      },
      desiredCapabilities: {
         browserName: "firefox",
      }
    }
  }
};
