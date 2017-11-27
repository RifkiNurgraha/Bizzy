const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var home = {
  url: function set_url() {
    var url = process.env.BASE_URL_MERCHANT;  
    console.log(url);
    return url;
  },
  elements: {
    pageTitleMerchantRegister: 'Daftar - BizzyID',
    firstName: '.uk-grid-small.uk-grid>div:nth-child(1)>input',
    lastName: '.uk-grid-small.uk-grid>div:nth-child(2)>div>input',
    email: '.login-box-form>form>div:nth-child(3)>div>input',
    password: '.login-box-form>form>div:nth-child(4)>div',
    passwordConfirm: '.login-box-form>form>div:nth-child(5)>div',
    mobilePhone: '.login-box-form>form>div:nth-child(6)>div',
    jabatan: '.login-box-form>form>div:nth-child(7)>div',
    registerButton: '.login-box-form>form>div:nth-child(8)>div>button'
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
    scrollDownHomePage: function() {
      return this.getLocationInView(home.elements.sslImage);
    },
    assertPageTitleMerchantRegister: function() {
      return base.assertPageTitle(this, home.elements.pageTitleMerchantRegister);
    },
    clickRegisterButton: function() {
      return base.clickElement(this, home.elements.registerButton);
    },
    setValueFirstName: function() {
      return base.setValueElement(this, home.elements.firstName, 'Fadly Nightwatch');
    },
    setValueLasttName: function() {
      return base.setValueElement(this, home.elements.LastName, 'Mahendra');
    },
    setValueEmail: function() {
      return base.setValueElement(this, home.elements.email, 'auto1@ildav.com');
    },
    setValuePassword: function() {
      return base.setValueElement(this, home.elements.password, 'Merchant123');
    },
    setValuePasswordConfirm: function() {
      return base.setValueElement(this, home.elements.passwordConfirm, 'Merchant123');
    },
    setValueMobilePhone: function() {
      return base.setValueElement(this, home.elements.mobilePhone, '08128381288');
    },
    setValueJabatan: function() {
      return base.setValueElement(this, home.elements.jabatan, 'CSO');
    },
  }]
}

module.exports = home;