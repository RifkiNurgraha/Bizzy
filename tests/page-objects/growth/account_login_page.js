const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var accountLogin = {
    elements: {
        txtOfficeEmail: '.ts-textfield-officeemail',
        txtPassword: '.ts-textfield-password',
        passwordOpen: '',
        btnLogin: '.ts-btn-login',
        cbKeepLoggedIn: '.ts-checkbox-keeploggedin',
        urlForgotPassword: '.ts-urllink-forgotpassword',
        urlRegisterCompany: '.ts-urllink-registercompany'
    },
    commands: [{
        inputOfficeEmail: function(officeEmail){
            return base.setValueElement(this,'@txtOfficeEmail',officeEmail)
        },
        inputPassword: function(password){
            return base.setValueElement(this,'@txtPassword',password)
        },
        clickBtnLogin: function(){
            return base.clickElement(this,'@btnLogin')
        },
        clickKeepLoggedIn: function(){
            return base.clickElement(this,'@cbKeepLoggedIn')
        },
        clickUrlForgotPassword: function(){
            return base.clickElement(this,'@urlForgotPassword')
        },
        clickUrlRegisterCompany: function(){
            return base.clickElement(this,'@urlRegisterCompany')
        }
    }]
}

module.exports = accountLogin;