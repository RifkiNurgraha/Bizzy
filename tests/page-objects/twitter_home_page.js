const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

var twitterHome = {
    url: function set_url() {
      var url = base.setURL(process.env.BASE_URL_TWITTER);
      return url;
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
