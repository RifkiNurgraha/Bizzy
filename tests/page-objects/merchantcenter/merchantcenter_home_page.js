const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('nightwatch-base-page');

var merchantCenterHome = {
    url: function set_url() {
      var url = base.setURL(process.env.BASE_URL_MC);
      return url;
    },
    testData: {
      emailData: process.env.MC_EMAIL,
      passData: process.env.MC_PASSWORD
    //  tittleData: process.env.MC_TITTLE
    },
    elements: {
      masuk: '.login-button',
      email: '#email',
      pass: '#password',
      pageTitlemerchantCenter: "Merchant Center - Landing Page",
      PageTitleHomeLogin: ".uk-page-title",
      keluar:".no-barba",
      PageTitleHomeLogout: ".section-title",
      PageHomeclickCursor: ".uk-navbar-nav>li:nth-child(2)>a>i"
    },
    commands: [{
      navigateTomerchantCenterHomePage: function() {
        return this.navigate();
      },
      clickmerchantCenterSelectButtonMasuk: function() {
        return base.clickElement(this, merchantCenterHome.elements.masuk);
      },
      assertpageTitlemerchantCenter: function() {
        return base.assertPageTitle(this, merchantCenterHome.elements.pageTitlemerchantCenter);
      },
      setUserPass: function() {
        base.setValueElement(this, merchantCenterHome.elements.email, merchantCenterHome.testData.emailData);
        base.setValueElementThenEnter(this, merchantCenterHome.elements.pass, merchantCenterHome.testData.passData, client);
      },
      assertUserPage: function() {
        return base.expectEqualsTextFromElement(this, merchantCenterHome.elements.PageTitleHomeLogin, "Data dan Laporan")
      },
      clickmerchantCenterSelectDropdownProfile: function() {
        return base.clickElement(this, merchantCenterHome.elements.PageHomeclickCursor);
      },
      clickmerchantCenterSelectLinkSignout: function() {
        return base.clickElement(this, merchantCenterHome.elements.keluar);
      },
      assertHomePage: function() {
        return base.expectEqualsTextFromElement(this, merchantCenterHome.elements.PageTitleHomeLogout, "Keuntungan Berbisnis")
      }
    }]
  }

  module.exports = merchantCenterHome;
