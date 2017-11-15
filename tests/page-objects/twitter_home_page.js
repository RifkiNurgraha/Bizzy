const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var twitterHome = {
    url: function set_url() {
      return 'https://twitter.com/';
    },
    elements: {
      pageTitleTwitter: "Twitter. It's what's happening."
    },
    commands: [{
      navigateToTwitterHomePage: function() {
        return this.navigate();
      },
      assertPageTitleTwitter: function() {
        return base.assertPageTitle(this, twitterHome.elements.pageTitleTwitter);
      }
    }]
  }

  module.exports = twitterHome;
