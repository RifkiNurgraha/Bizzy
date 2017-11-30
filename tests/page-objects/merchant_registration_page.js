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
    assertPageTitleMerchantRegistration: function() {
      return base.assertPageTitle(this, home.elements.pageTitleMerchantRegister);
    },
    clickRegisterButton: function() {
      return base.clickElement(this, home.elements.registerButton);
    },
    setValueMerchantRegistration: function(text) {
      if (text == 'firstName') {
        return base.setValueElement(this, home.elements.firstName, 'Fadlyy');
      } else if (text == 'lastName') {
        return base.setValueElement(this, home.elements.lastName, 'Mahendra');
      } else if (text == 'email') {
        return base.setValueElement(this, home.elements.email, 'night1@ildav.com');
      } else if (text == 'password') {
        return base.setValueElement(this, home.elements.password, 'Merchant123');
      } else if (text == 'passwordConfirm') {
        return base.setValueElement(this, home.elements.passwordConfirm, 'Merchant123');
      } else if (text == 'mobilePhone') {
        return base.setValueElement(this, home.elements.mobilePhone, '0812838183244');
      } else if (text == 'jabatan') {
        return base.setValueElement(this, home.elements.jabatan, 'Sales Manager');
      }   
    },
    assertPageTitleRegistrationForm: function() {
      return base.assertPageTitle(this, home.assertPageTitleRegistrationForm);
    }
  }]
}

module.exports = home;