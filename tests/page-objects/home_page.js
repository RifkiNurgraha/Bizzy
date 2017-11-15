const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var home = {
  url: function set_url() {
    var u = process.env.BASE_URL;
    console.log(u);
    return u;
  },
  elements: {
    pageTitleBizzy: 'Belanja Alat Kantor, Elektronik, Dapur Harga Murah - Bizzy',
    bizzySelectLinkText: '.list-unstyled.list-inline.list-sitemap>li:nth-child(2)>ul>li:nth-child(2)>a',
    bizzyBenefitLinkText: '.list-unstyled.list-inline.list-sitemap>li:nth-child(2)>ul>li:nth-child(3)>a',
    sslImage: '.list-unstyled>li>a>img'
  },
  commands: [{
    navigateToHomePage: function() {
      return this.navigate();
      // this.waitForElementPresent(home.elements.sslImage, 30000, function(result) {
      //   console.log(result);
      // });
      // this.waitForElementVisible(home.elements.sslImage, 30000, function(result) {
      //   console.log(result);
      // });
      // return this;
    },
    clickBizzySelectLinkText: function() {
      return base.clickElement(this, home.elements.bizzySelectLinkText);
    },
    clickBizzyBenefitLinkText: function() {
      return base.clickElement(this, home.elements.bizzyBenefitLinkText);
    },
    scrollDownHomePage: function() {
      return this.getLocationInView(home.elements.sslImage);
    },
    assertPageTitleBizzy: function() {
      return base.assertPageTitle(this, home.elements.pageTitleBizzy);
    }
  }]
}

module.exports = home;
