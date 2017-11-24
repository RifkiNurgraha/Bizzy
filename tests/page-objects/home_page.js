const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var home = {
  url: function set_url() {
    var url = process.env.BASE_URL;
    console.log(url);
    return url;
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
