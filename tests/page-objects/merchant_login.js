const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('./../helper/base_page.js');

var merchantLogin = {
    url: function() {
      var url = base.setURL(process.env.BASE_URL_ACCOUNT+ '/login');
      return url;
    },
    testData: {
      titleText: 'Login - BizzyID',
      tittleDashboard: 'Merchant Center - Dashboard',
      emailData: process.env.MERCHANT_EMAIL,
      passData: process.env.MERCHANT_PASSWORD,
    },
    elements: {
      email: '#email',
      pass: '#password',
      buttonMasuk: '.uk-button.uk-button-primary.uk-width-1-1',
      buttonDaftar:'.uk-button.uk-button-default.uk-width-1-1.uk-margin-10-top'
    },
    commands: [{
      navigateToMerchantLoginPage: function() {
        return this.navigate();
      },
      assertPageTextLogin: function() {
        return base.assertPageTitle(client, merchantLogin.testData.titleText);
      },
      clickButtonMerchantLogin: function(button) {
        if (button == 'masuk'){
            base.clickElement(this, merchantLogin.elements.buttonMasuk);
        } else if (button == 'daftar') {
          base.clickElement(this, merchantLogin.elements.buttonDaftar);
        }
      },
      setUserPass: function() {
        base.setValueElement(this, merchantLogin.elements.email, merchantLogin.testData.emailData);
        base.setValueElement(this, merchantLogin.elements.pass, merchantLogin.testData.passData);
      },
      assertUserPage: function() {
          return base.assertPageTitle(client, merchantLogin.testData.tittleDashboard);
      }
    }]
  }

  module.exports = merchantLogin;
