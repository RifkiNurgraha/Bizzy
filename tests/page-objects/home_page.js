const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
const { matches } = require('z')
var base = require('./../helper/base_page.js');

var home = {
  url: function set_url() {
    var url = base.setURL(process.env.BASE_URL);
    return url;
  },
  elements: {
    pageTitleBizzy: 'Belanja Alat Kantor, Elektronik, Dapur Harga Murah - Bizzy',
    bizzySelectLinkText: '.list-unstyled.list-inline.list-sitemap>li:nth-child(2)>ul>li:nth-child(2)>a',
    bizzyBenefitLinkText: '.list-unstyled.list-inline.list-sitemap>li:nth-child(2)>ul>li:nth-child(3)>a',
    pageTitleBizzyBenefit: 'Bizzy Benefit - Bizzy',
    pageTitleBizzySelect: 'Bizzy Select - Exclusive Procurement Solution - Bizzy',
    sslImage: '.list-unstyled>li>a>img'
  },
  commands: [{
    navigateToHomePage: function() {
      return this.navigate();
    },
    clickBizzyLinkText: function(link_text) {
      matches(link_text) (
        (x = 'Bizzy Select') => base.clickElement(this, home.elements.bizzySelectLinkText),
        (x = 'Bizzy Benefit') => base.clickElement(this, home.elements.bizzyBenefitLinkText)
      )
    },
    clickBizzySelectLinkText: function() {
      return base.clickElement(this, home.elements.bizzySelectLinkText);
    },
    clickBizzyBenefitLinkText: function() {
      return base.clickElement(this, home.elements.bizzyBenefitLinkText);
    },
    scrollDownHomePage: function() {
      return base.scrollToElement(this, home.elements.sslImage);
    },
    assertPageTitleBizzy: function() {
      return base.assertPageTitle(this, home.elements.pageTitleBizzy);
    },
    assertPageTitleBizzyPages: function(pages) {
      if (pages == 'Bizzy Select') {
        return base.assertPageTitle(this, home.elements.pageTitleBizzySelect);
      } else if (pages == 'Bizzy Benefit') {
        return base.assertPageTitle(this, home.elements.pageTitleBizzyBenefit);
      };
    }
  }]
}

module.exports = home;
