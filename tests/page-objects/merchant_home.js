const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('./../helper/base_page.js');

var merchantHome = {
    url: function() {
      var url = base.setURL(process.env.BASE_URL_MERCHANT);
      // var url = process.env.BASE_URL_FACEBOOK;
      // console.log('Accessing ' + url);
      return url;
    },
    testData: {
      titleText: 'Merchant Center - Landing Page',
      headerLogin: 'Masuk dengan Akun Bizzy Anda',
      headerRegister: 'Buat Akun Bizzy Anda',
    //   pageTitleFacebookHalaman: 'Buat Halaman | Facebook',
    //   emailData: process.env.FACEBOOK_USERNAME,
    //   passData: process.env.FACEBOOK_PASSWORD,
    //   profileNameData: process.env.FACEBOOK_PROFILE_NAME
    },
    elements: {
    //   gratisTextElement: '._4e2b.fsm.fwn.fcg',
    //   linkTextBuatHalaman: '#reg_pages_msg>a',
      email: '#email',
      pass: '#pass',
      headerLoginElement:'div#main-content h3',
      buttonLogin: '.login-button',
      buttonRegister: '#register-button'
    //   profileName: '._1vp5'
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
    //   assertheaderRegister: function(){
    //     returnbase.assertPageTitle(client, merchantHome.testData.headerRegister);
    //   },
      clickButtonMerchantHome: function(button) {
        if (button == 'Login') {
            base.pauseSleep(this.api, 5000);
            base.clickElement(this, merchantHome.elements.buttonLogin);
        //   this.click(this, merchantHome.elements.buttonLogin);
        //   base.pauseSleep(this.api, 5000);
        } else if (button == 'Register') {
          base.clickElement(this, merchantHome.elements.buttonRegister);
        } 
      }
    //   clickBuatHalaman: function() {
    //     base.clickElement(this, facebookHome.elements.linkTextBuatHalaman);
    //    },
    //   clickLogin: function() {
    //     this.click('.uiButton.uiButtonConfirm>input');
    //     base.pauseSleep(this.api, 5000);
    //   },
    //   assertGratisText: function() {
    //     return this.api.expect.element(facebookHome.elements.gratisTextElement).text.to.equal(facebookHome.testData.gratisText);
    //   },
    //   setUserPass: function() {
    //     base.setValueElement(this, facebookHome.elements.email, facebookHome.testData.emailData);
    //     base.setValueElement(this, facebookHome.elements.pass, facebookHome.testData.passData);
    //   },
    //   assertUserPage: function() {
    //     return client.assert.containsText(facebookHome.elements.profileName, facebookHome.testData.profileNameData);
    //   }
    }]
  }

  module.exports = merchantHome;
