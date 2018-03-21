const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

var home = {
    url : function set_url(){
        var url = process.env.BASE_URL_PHOENIX;
        console.log(url);
        return url;
    },
    element: {
        buttonLogin :'#__layout .uk-button.uk-button-default.ts-button-login'
    }
}