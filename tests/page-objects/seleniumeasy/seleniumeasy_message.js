const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

var home = {
    url: function set_url() {
      var url = process.env.BASE_URL_BO_SELENIUM;
      console.log(url);
      return url;
    },
    elements: {
      message: '#get-input .form-group .form-control',
      expMessage: '#display',
      buttonShowMessage: '#get-input .btn.btn-default',
      valueA: '#sum1',
      valueB: '#sum2',
      buttonGetTotal: '#gettotal .btn.btn-default',
      totalValue: '#displayvalue'


    },
    testData :{
        valueMessage : 'test selenium'
    },
    commands: [{
      navigateToBasicFirstDemo: function() {
        return this.navigate();
      },
      inputMessage: function() {
        return base.setValueElement(this, home.elements.message, home.testData.valueMessage)
      },
      clickShowMessage: function(){
          return base.clickElement(this, home.elements.buttonShowMessage)
      },
      verifyMessage: function(choosenSex) {
        return base.expectEqualsTextFromElement(this,home.elements.expMessage, home.testData.valueMessage);
      },
      inputValuePertama: function(selectValueFirst){
          return base.setValueElement(this, '@valueA', selectValueFirst)
      },
      inputValueKedua: function(selectValueSecond){
          return base.setValueElement(this, '@valueB', selectValueSecond)
      },
      clickTotalValue: function(){
          return base.clickElement(this, home.elements.buttonGetTotal)
      },
      verifyTotalValue: function(valueA, valueB){
        var totalmanual = parseInt(valueA) + parseInt(valueB)
        console.log(totalmanual)
        return base.expectEqualsTextFromElement(this, home.elements.totalValue, totalmanual.toString())
      }
    }]
  }
  
  module.exports = home;