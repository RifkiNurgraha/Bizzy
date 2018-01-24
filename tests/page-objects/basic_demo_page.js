const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');


var basicDemoPage = {
    url: function() {
      var url = base.setURL(process.env.BASE_URL_BASIC_DEMO);
      return url;
    },
    testData: {
      sectiontitle1: 'Single Input Field',
      sectiontitle2: 'Two Input Fields'
    },
    elements: {
      sectiontitlemsg1: '.col-md-6.text-left>div:nth-child(4)>.panel-heading',
      sectiontitlemsg2: '.col-md-6.text-left>div:nth-child(5)>.panel-heading',
      entermsg: '#user-message',
      btnshowmsg: '.btn.btn-default',
      resultmsg: '#display',
      enterA: '#sum1',
      enterB: '#sum2',
      btngetgoal: '.col-md-6.text-left>div:nth-child(5)>.panel-body>#gettotal>.btn.btn-default',
      resultgoal: '.col-md-6.text-left>div:nth-child(5)>.panel-body>div>#displayvalue'
    },
    commands: [{
      navigateToBasicDemoPage: function() {
        return this.navigate();
      },
      assertPageSectionTitle: function(text) {
        if(text == 'section1'){
          return this.api.expect.element(basicDemoPage.elements.sectiontitlemsg1).text.to.equal(basicDemoPage.testData.sectiontitle1)
        }else{
          return this.api.expect.element(basicDemoPage.elements.sectiontitlemsg2).text.to.equal(basicDemoPage.testData.sectiontitle2)
        }
      },
      setMessageSection1: function(text) {
        base.setValueElement(this, basicDemoPage.elements.entermsg, text);
      },
      setMessageSection2: function(numberA, numberB) {
        base.setValueElement(this, basicDemoPage.elements.enterA, numberA);
        base.setValueElement(this, basicDemoPage.elements.enterB, numberB);
      },
      clickButton: function(button) {
        if (button == 'Show Message') {
            base.clickElement(this, basicDemoPage.elements.btnshowmsg);
        }
        else if (button == 'Get Total') {
            base.clickElement(this, basicDemoPage.elements.btngetgoal);
        }
      },
      assertresultData1: function(text) {
        return base.expectEqualsTextFromElement(this, basicDemoPage.elements.resultmsg, text)
      },
      assertresultData2: function(numberA, numberB) {
        var AA = parseInt(numberA) + parseInt(numberB);
        return base.expectEqualsTextFromElement(this, basicDemoPage.elements.resultgoal, AA)
      },
    }]
  }

  module.exports = basicDemoPage;