var base = require('./../../helper/base_page.js');

var businessProfileAddress = {
    elements:{
        txtBuildingName:'#ts-textfield-buildingname',
        txtStreetName:'#ts-textfield-streetname',
        dropDownProvince:'#ts-dropdown-province',
        dropDownCity:'#ts-dropdown-city',
        dropDownDistric:'#ts-dropdown-distric',
        dropdownKelurahan: '#ts-dropdown-kelurahan',
        txtRegionCode: '#ts-textfield-regioncode',
        txtPhone:'#ts-textfield-phone',
        btnKembali:'#ts-button-kembali',
        btnSaveAndContinue:'#ts-button-saveandcontinue',
    },
    commands:[{
        inputBuildingName:function(buildingName){
            return base.setValueElement(this,'@txtBuildingName',buildingName)
        },
        chooseProvince:function(provinceOption){
            return base.chooseOptionValue(this,'@dropdownProvince',provinceOption)
        },
        clickBtnKembali:function(){
            return base.clickElement(this,'@btnKembali')
        }

    }]
}
module.exports = businessProfileAddress;