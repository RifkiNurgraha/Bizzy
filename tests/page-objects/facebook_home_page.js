const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('./../helper/base_page.js');

var facebookHome = {
    url: function() {
      var url = base.setURL(process.env.BASE_URL_FACEBOOK);
      // var url = process.env.BASE_URL_FACEBOOK;
      // console.log('Accessing ' + url);
      return url;
    },
    testData: {
      gratisText: 'Gratis. Cukup pilih jenis Halaman untuk mulai membuatnya.',
      pageTitleFacebook: 'Facebook - Masuk atau Daftar',
      pageTitleFacebookHalaman: 'Buat Halaman | Facebook',
      emailData: process.env.FACEBOOK_USERNAME,
      passData: process.env.FACEBOOK_PASSWORD,
      profileNameData: process.env.FACEBOOK_PROFILE_NAME
    },
    elements: {
      gratisTextElement: '._4e2b.fsm.fwn.fcg',
      linkTextBuatHalaman: '#reg_pages_msg>a',
      email: '#email',
      pass: '#pass',
      buttonLogin: '#u_0_5',
      profileName: '._1vp5'
    },
    commands: [{
      navigateToFacebookHomePage: function() {
        return this.navigate();
      },
      assertPageTitleFacebook: function() {
        return base.assertPageTitle(client, facebookHome.testData.pageTitleFacebook);
      },
      assertPageTitleFacebookHalaman: function() {
        return base.assertPageTitle(client, facebookHome.testData.pageTitleFacebookHalaman);
      },
      clickButtonFacebookHome: function(button) {
        if (button == 'Login') {
          this.click('.uiButton.uiButtonConfirm>input');
          base.pauseSleep(this.api, 5000);
        } else if (button == 'Buat Halaman') {
          base.clickElement(this, facebookHome.elements.linkTextBuatHalaman);
        }
      },
      clickBuatHalaman: function() {
        base.clickElement(this, facebookHome.elements.linkTextBuatHalaman);
      },
      clickLogin: function() {
        this.click('.uiButton.uiButtonConfirm>input');
        base.pauseSleep(this.api, 5000);
      },
      assertGratisText: function() {
        return this.api.expect.element(facebookHome.elements.gratisTextElement).text.to.equal(facebookHome.testData.gratisText);
      },
      setUserPass: function() {
        base.setValueElement(this, facebookHome.elements.email, facebookHome.testData.emailData);
        base.setValueElement(this, facebookHome.elements.pass, facebookHome.testData.passData);
      },
      assertUserPage: function() {
        return client.assert.containsText(facebookHome.elements.profileName, facebookHome.testData.profileNameData);
      }
    }]
  }

  module.exports = facebookHome;
