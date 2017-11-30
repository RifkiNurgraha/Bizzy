const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('./../helper/base_page.js');

var phoenixTemplate = {
    url: function() {
        var url = base.setURL(process.env.BASE_URL_PHOENIX_TEMPLATE);
        return url;
    },
    testData: {
        pageTitlePhoenixTemplate: 'Bizzy Phoenix Template'
    },
    elements: {
        contentHeader: '.content-wrapper>h1'
    },
    commands: [{
        navigateToPhoenixTemplateHomepage: function() {
          return this.navigate();
        },
        assertPageTittlePhoenixTemplateHomepage: function() {
         base.pauseSleep(this.api, 60000);
         return base.assertPageTitle(client, phoenixTemplate.testData.pageTitlePhoenixTemplate);
        },
        assertContentHeaderPhoenix: function() {
            return base.getStringText(phoenixTemplate.elements.contentHeader).text.to.equal('Index of /pages/');
        }
    }]

}

module.exports = phoenixTemplate;