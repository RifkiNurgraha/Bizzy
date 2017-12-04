import { BADSTR } from 'dns';

const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var businessDoc = {
    elements:{
        txtNPWP:'ts-textfield-npwp',
        fileNPWP:'',
        fileSIUP:'',
        txtExpiredSIUP:'',
        btnBack:'ts-button-back',
        btnSaveAndCont:'ts-button-savecontinue'
    },
    commands:[{
        inputNPWPNumber:function(npwpNumber){
            return base.setValueElement(this,'@txtNPWP',npwpNumber);
        },
        attachNPWPFile:function(){
            var fileNPWPlocation = "";
            return base.setValueElement(this,'@fileNPWP',fileNPWPlocation);
        },
        attachSIUPFile:function(){
            var fileSIUPlocation= "";
            return base.setValueElement(this,'@fileSIUP',fileSIUPlocation);
        },
        inputExpiredSIUP:function(expiredSIUP){
            return base.setValueElement(this,'@txtExpiredSIUP',expiredSIUP);
        },
        clickSaveAndCont:function(){
            return base.clickElement(this,'@btnSaveAndCont');
        }
    }]
}
module.exports=businessDoc;