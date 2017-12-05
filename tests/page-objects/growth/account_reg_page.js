const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var accountReg = {
    elements: {
       txtFirstName:'.ts-textfield-firstname',
       txtLastName:'.ts-textfield-lastname',
       txtOfficeEmail:'.ts-textfield-officeemail',
       txtPassword:'.ts-textfield-password',
       btnCreateAccount:'.ts-button-createaccount',
       eyeOpen:'.ts-label-eyeopen',
       linkTermOfService:'.ts-urllink-termofservice',
       linkPrivacyPolicy:'.ts-urllink-privacypolicy',
       emailChange:'.ts-text-changeemail',
       btnSaveAndSendChangeEmail:'.ts-button-saveandsend'
    },
    commands: [{
        inputFirstName: function(firstName){
            return base.setValueElement(this,'@txtFirstName',firstName);
        },
        inputLastName: function(lastName){
            return base.setValueElement(this,'@txtLastName',lastName);
        },
        inputOfficeEmail: function(officeEmail){
            return base.setValueElement(this,'@txtOfficeEmail',officeEmail);
        },
        inputPassword: function(password){
            return base.setValueElement(this,'@txtPassword',password);
        },
        clickCreateAccountBtn: function(){
            return base.clickElement(this,'@btnCreateAccount');
        },
        clickEyeOpen: function(){
            return base.clickElement(this,'@eyeOpen');
        },
        clickLinkTermOfService: function(){
            return base.clickElement(this,'@linkTermOfService');
        },
        clickPrivacyPolicy: function(){
            return base.clickElement(this,'@linkPrivacyPolicy');
        },
        clickChangeEmail: function(){
            return base.clickElement(this,'@emailChange');
        },
        inputChangeEmail: function(email){
            return base.setValueElement(this,'@changeEmail',email)
        },
        clickSaveAndSendEmailChange: function(){
            return base.clickElement(this,'@btnSaveAndSendChangeEmail');
        }
    }]
}

module.exports = accountReg;