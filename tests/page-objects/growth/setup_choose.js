var base = require('./../../helper/base_page.js');

var setupChoose = {
    elements:{
        rbSelfControl:'#ts-radiobutton-selfcontrol',
        rbShareControl:'#ts-radiobuton-sharecontrol',
        btnContinue:'#ts-button-continue'
    },
    commands:[{
        chooseSelfControl:function(){
            base.clickElement(this,'@rbSelfControl');
            base.expectElementSelected(this,'@rbSelfControl');
        },
        chooseShareControl:function(){
            base.clickElement(this,'@rbShareControl');
            base.expectElementSelected(this,'@rbShareControl');
        },
        clickContinue:function(){
            base.clickElement(this,'@btnContinue');
        }
    }]
}
module.exports=setupChoose;