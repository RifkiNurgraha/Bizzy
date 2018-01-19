const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

var bbcHome = {
    url : function set_url(){
        var url = base.setURL(process.env.BASE_URL_BBC);
        return url;
    },
    testData : {
        pageTitleBBC : "Home - BBC News"
    },
    elements : {
        pageName : '.gs-u-pv'
    },
    commands : [{
        navigateToBBCPage : function(){
            return this.navigate();
        },
        assertPageTitleBBC : function(){
            return base.assertPageTitle(this, bbcHome.testData.pageTitleBBC ,bbcHome.elements.pageName);
        }
    }]
}

module.exports = bbcHome;