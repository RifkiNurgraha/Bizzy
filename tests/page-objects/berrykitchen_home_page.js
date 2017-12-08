const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var BerrykitchenHome = {
    url: function set_url() {
      var url = base.setURL(process.env.BASE_URL_BERRYKITCHEN);
      return url;
    },
    elements: {
      pageTitleBerrykitchen: "Catering Bento Harian Untuk Perkantoran di Jakarta Barat, Pusat, Selatan, Utara | Berrykitchen"
    },
    commands: [{
      navigateToBerrykitchenHomePage: function() {
        return this.navigate();
      },
      assertpageTitleBerrykitchen: function() {
        return base.assertPageTitle(this, BerrykitchenHome.elements.pageTitleBerrykitchen);
      }
    }]
  }

  module.exports = BerrykitchenHome;
