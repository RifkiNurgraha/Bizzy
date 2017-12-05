var base = require('./../../helper/base_page.js');

var picContact = {
    elements:{
        tickboxDataSaya:'#ts-tickbox-datasaya',
        txtFullName:'#ts-textfield-fullname',
        txtOfficePhone:'#ts-textfield-officephone',
        txtPosition: '#ts-textfield-position',
        txtNoHp: '#ts-textfield-nohp',
        btnKembali:'#ts-button-kembali',
        btnSaveAndContinue:'#ts-button-saveandcontinue',
    },
    commands:[{
        clickTickBox:function(){
            return base.clickElement(this,'@tickboxDataSaya')
        },
        inputFullName:function(fullName){
            return base.setValueElement(this,'@txtFullName',fullName)
        },
        inputOfficePhone:function(officePhone){
            return base.setValueElement(this,'@txtOfficePhone',officePhone)
        },
        inputPosition:function(position){
            return base.setValueElement(this,'@txtPosition',position)
        },
        inputNoHp:function(noHp){
            return base.setValueElement(this,'@txtNoHp',noHp)
        },
        clickBtnKembali:function(){
            return base.clickElement(this,'@btnKembali')
        },
        clickBtnSaveAndContinue:function(){
            return base.clickElement(this,'@btnSaveAndContinue')
        }

    }]
}
module.exports = picContact;