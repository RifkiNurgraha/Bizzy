const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('./../helper/base_page.js');

var merchantHome = {
    url: function() {
      var url = base.setURL(process.env.BASE_URL_MERCHANT);
      return url;
    },
    testData: {
      titleText: 'Merchant Center - Landing Page',
      headerLogin: 'Masuk dengan Akun Bizzy Anda',
      headerRegister: 'Buat Akun Bizzy Anda'

    },
    elements: {
      headerLoginElement:'div#main-content h3',
      buttonLogin: '.login-button',
      buttonRegister: '#register-button'
    },
    commands: [{
      navigateToMerchantHomePage: function() {
        return this.navigate();
      },
      assertPageTextMerchant: function() {
        return base.assertPageTitle(client, merchantHome.testData.titleText);
      },
      assertheaderLogin: function() {
        return base.assertContainsText(client, merchantHome.elements.headerLoginElement, merchantHome.testData.headerLogin);
      },
      clickButtonMerchantHome: function(button) {
        if (button == 'login') {
            base.pauseSleep(this.api, 5000);
            base.clickElement(this, merchantHome.elements.buttonLogin);
        } else if (button == 'register') {
          base.clickElement(this, merchantHome.elements.buttonRegister);
        } else if (button == 'masuk'){
            base.clickElement(this, merchantHome.elements.buttonMasuk);
        } else {
            console.log('error di button merchant');
        }
      },
    }]
  }

  module.exports = merchantHome;
