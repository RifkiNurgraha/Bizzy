const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var MerchantHome = {
  url: function set_url() {
    var url = process.env.BASE_URL_MERCHANT;  
    console.log(url);
    return url;
  },
  elements: {
    pageTitleMerchant: 'Merchant Center - Landing Page',
    registerButton: '.uk-button.uk-button-primary.uk-button-large.uk-text-uppercase.uk-scrollspy-inview.uk-animation-shake'
  },

  commands: [{
    navigateToMerchantHomePage: function() {
      return this.navigate();
      // this.waitForElementPresent(home.elements.sslImage, 30000, function(result) {
      //   console.log(result);
      // });
      // this.waitForElementVisible(home.elements.sslImage, 30000, function(result) {
      //   console.log(result);
      // });
      // return this;
    },
    clickRegisterButton: function() {
        return base.clickElement(this, MerchantHome.elements.registerButton);
    },
    // scrollDownHomePage: function() {
    //   return this.getLocationInView(MerchantHome.elements.sslImage);
    // },
    assertPageTitleMerchantCenter: function() {
      return base.assertPageTitle(this, MerchantHome.elements.pageTitleMerchant);
    }
  }]
}

module.exports = MerchantHome;