const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var accountVer = {
    elements:{
        verCode1:'',
        verCode2:'',
        verCode3:'',
        verCode4:'',
        btnVerify:''
    },
    commands: [{
        clickBtnVerify: function(){
            return base.clickElement(this,btnVerify)
        }
    }]
}

module.exports = accountVer;