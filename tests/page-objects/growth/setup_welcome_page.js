var base = require('./../../helper/base_page.js');

var setupWelcome = {
    elements:{
        btnStartToConfigure:'.ts-button-startconfigure',
    },
    commands:[{
        clickStartToConfigure:function(){
            return base.clickElement(this,'@btnStartToConfigure');
        }
    }]
}
module.exports=setupWelcome;