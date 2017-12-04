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
        inputStreetName:function(streetName){
            return base.setValueElement(this,'@txtStreetName',streetName)
        },
        chooseProvince:function(provinceOption){
            return base.chooseOptionValue(this,'@dropdownProvince',provinceOption)
        },
        chooseCity:function(cityOption){
            return base.chooseOptionValue(this,'@dropdownCity',cityOption)
        },
        chooseDistric:function(districOption){
            return base.chooseOptionValue(this,'@dropdownDistric',districOption)
        },
        chooseKelurahan:function(kelurahanOption){
            return base.chooseOptionValue(this,'@dropdownKelurahan',kelurahanOption)
        },
        showRegionCode:function(){
            return base.getStringText(this,'@txtRegionCode')
        },
        inputPhone:function(phone){
            return base.setValueElement(this,'@txtPhone',phone)
        },
        clickBtnKembali:function(){
            return base.clickElement(this,'@btnKembali')
        },
        clickBtnSaveAndContinue:function(){
            return base.clickElement(this,'@btnSaveAndContinue')
        }

    }]
}
module.exports = businessProfileAddress;