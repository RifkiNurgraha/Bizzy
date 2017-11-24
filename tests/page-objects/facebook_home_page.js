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
      passData: process.env.FACEBOOK_PASSWORD
    },
    elements: {
      gratisTextElement: '._4e2b.fsm.fwn.fcg',
      linkTextBuatHalaman: '#reg_pages_msg>a',
      email: '#email',
      pass: '#pass',
      buttonLogin: '#u_0_5'
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
      clickBuatHalaman: function() {
        return base.clickElement(this, facebookHome.elements.linkTextBuatHalaman);
      },
      assertGratisText: function() {
        return this.api.expect.element(facebookHome.elements.gratisTextElement).text.to.equal(facebookHome.testData.gratisText);
      },
      pauseSleep: function() {
        return client.pause(5000);
      },
      setUserPass: function() {
        // client.clearValue(facebookHome.elements.email);
        // client.clearValue(facebookHome.elements.pass);
        client.setValue(facebookHome.elements.email, facebookHome.testData.emailData);
        // base.setValueElement(this, facebookHome.elements.email, facebookHome.testData.emailData);
        client.setValue(facebookHome.elements.pass, facebookHome.testData.passData);
        // base.setValueElement(this, facebookHome.elements.pass, facebookHome.testData.passData);
      },
      assertUserPage: function() {
        return client.assert.containsText('._1vp5', 'Wibowo');
      },
      clickLogin: function() {
        this.click('.uiButton.uiButtonConfirm>input');
        base.pauseSleep(this.api, 5000);
      }
    }]
  }

  module.exports = facebookHome;
