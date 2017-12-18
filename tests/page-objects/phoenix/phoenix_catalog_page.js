const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('nightwatch-base-page');

var phoenixHome = {
    url: function set_url() {
      var url = base.setURL(process.env.BASE_URL_PHOENIX + "/seller/catalog/add");
      return url;
    },
    elements: {
        txtSearchProduct: '.ts-textfield-searchproduct',
        btnSearchProduct: '.ts-button-searchproduct',
        btnSelectProduct: '.ts-button-selectproduct',
        btnAddNewProduct: '.ts-button-addnewproduct',
        btnAddNewProductNotFound: '.ts-button-addnewproductnotfound',
        urlVendorName: '.ts-linktext-vendorname',
        urlCategories: '.ts-linktext-categories',
        urlAddNewProduct: '.ts-linktext-addnewproduct',
        urlBreadcrumbsProductCatalog: '.ts-breadcrumbs-productcatalog',
        urlBreadcrumbsHome: '.ts-breadcrumbs-home',
        tabAddNewProduct: '.ts-tab-addnewproduct',
        tabAddMultipleProduct: '.ts-tab-addmultipleproduct',
    },
    commands: [{
      navigateTophoenixHomePage: function() {
        return this.navigate();
      },
	  verifyPage: function() {	
            return base.expectVisible(this,'@txtSearchProduct');
      },
	  inputKeyword: function(keyword){
            return base.setValueElement(this,'@txtSearchProduct',"keyword");
      },
	  clickSelectProductBtn: function(){
            return base.clickElement(this,'@btnSearchProduct');
      }
    }]
  }

  module.exports = phoenixHome;
