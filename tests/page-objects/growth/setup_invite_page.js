var base = require('./../../helper/base_page.js');

var setupInvite={
    elements:{
        dropdownSuperAdmin:'.ts-dropdown-superadmin',
        dropdownProcurementAdmin:'.ts-dropdown-producerementadmin',
        btnContinue:'.ts-button-continue'
    },
    commands:[{
        chooseSuperAdmin:function(optionValue){
            return base.chooseOptionValue(this,'@dropdownSuperAdmin',optionValue);
        },
        chooseProcurementAdmin:function(optionValue){
            return base.chooseOptionValue(this,'@dropdownProcurementAdmin',optionValue);
        },
        clickButtonContinue:function(){
            return base.clickElement(this,'@btnContinue');
        }
    }]
}
module.exports=setupInvite;