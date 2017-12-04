const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var accountReg = {
    elements: {
       txtFirstName:'',
       txtLastName:'',
       txtOfficeEmail:'',
       txtPassword:'',
       btnCreateAccount:''
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
        }
    }]
}

module.exports = accountReg;