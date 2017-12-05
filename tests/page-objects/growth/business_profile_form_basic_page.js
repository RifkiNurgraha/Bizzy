const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var businessProfileBasic = {
    elements:{
        listFirstLabel:'.ts-dropdown-firstlabel',
        txtCompanyName:'.ts-textfield-companyname',
        dropdownLastLabel:'.ts-dropdown-lastlabel',
        dropdownCompanyType:'.ts-dropdown-companytype',
        dropdownNumberOfEmployees:'.ts-dropdown-numberofemployees'
    },
    commands:[{
        selectFirstLabel:function(optionValue){
            return base.chooseOptionValue(this,'@listFirstLabel',optionValue);
        },
        inputCompanyName:function(companyName){
            return base.setValueElement(this,'@txtCompanyName',companyName);
        },
        selectLastLabel:function(optionValue){
            return base.chooseOptionValue(this,'@listLastLabel',optionValue);
        },
        selectCompanyType:function(optionValue){
            return base.chooseOptionValue(this,'@listCompanyType',optionValue);
        },
        selectNumberOfEmployees:function(optionValue){
            return base.chooseOptionValue(this,'@listNumberOfEmployees',optionValue);
        }
    }]
}
module.exports = businessProfileBasic;