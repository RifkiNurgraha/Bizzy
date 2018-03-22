const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

var bohome = {
    url: function() {
      var url = base.setURL(process.env.BASE_URL_PHOENIX);
      return url;
    },
    testData: {
        pageTitle:'Bizzy - Customer',
        pageTitleLogin:'Bizzy - Login',
        pageTitleHome:'Bizzy - Launchpad',
        email:'vendor@ildav.com',
        password:'bizzy123',
        userName:'Bob Widjaja',
        companyName:'PT Maju Terus',
        produk:'dunlop',
        daftarProduct:'Daftar Produk'
    },
    elements: {
        buttonMasuk:'#__layout .uk-button.uk-button-default.ts-button-login',
        buttonDaftar: '.uk-button.button-register.uk-margin-20-right.ts-button-signup',
        inputName:'input[name=email]',
        inputPassword:'#pass',
        buttonLogin: '.uk-margin .uk-button.uk-button-primary.uk-width-1-1.ts-button-login',
        verifyUserName: '.uk-container .uk-navbar .uk-navbar-right.uk-margin-remove-right .users-link.ts-label-username',
        verifyCompanyName: '.uk-text-center.uk-text-zeta.uk-text-600.uk-margin.company-title',
        menuDaftarProduct: '.list-menu li:nth-child(2) .link-sidebar.ts-urllink-listproduct',
        verifyMenuDaftarProduk: '.uk-margin-remove.uk-text-beta.uk-margin-32-bottom',
        menuTambahProduct:'.list-menu .link-sidebar.ts-urllink-addproduct',
        searchProduct:'.uk-input.ts-textfield-search',
        listProdukPertama: 'tbody tr:nth-child(1) td:nth-child(1) .uk-text-600.uk-margin-16-bottom',
        stokProduk: 'span.ts-table-stock',
        buttonSearch:'.uk-button.uk-button-primary.ts-button-searchproduct'
    },
    commands: [{
      navigateToBOHomePage: function() {
        return this.navigate();
      },
      assertPageTitleBO: function() {
        return base.assertPageTitle(client, bohome.testData.pageTitle);
      },
      clickButtonBOHome: function(tombol) {
        if (tombol == 'Masuk') {
          base.clickElement(this, bohome.elements.buttonMasuk);
          base.pauseSleep(this.api, 5000);
        } else if (tombol == 'Daftar') {
          base.clickElement(this, bohome.elements.buttonDaftar);
          base.pauseSleep(this.api, 5000);
        }
      },
      assertPageTitleLogin: function() {
        return base.assertPageTitle(client, bohome.testData.pageTitleLogin);
      },
      setUserPassword: function() {
        base.setValueElement(this, bohome.elements.inputName, bohome.testData.email);
        base.setValueElement(this, bohome.elements.inputPassword, bohome.testData.password);
        base.clickElement(this, bohome.elements.buttonLogin);
        base.waitElementPresent(this, bohome.elements.verifyUserName);

      },
      assertDashboardPage: function(){
        return base.assertPageTitle(this, bohome.testData.pageTitleHome);

      },
      goToMenu: function(tabMenu){
        if (tabMenu == 'daftar produk'){
            base.clickElement(this, bohome.elements.menuDaftarProduct);
            base.waitElementVisible(this, bohome.elements.verifyMenuDaftarProduk);
        } else if (tabMenu == 'tambah produk'){
          base.clickElement(this, bohome.elements.menuTambahProduct);
          base.pauseSleep(this.api, 5000);
        }
      },
      inputSearchProduct: function(namaProduk){
        base.setValueElement(this, bohome.elements.searchProduct, namaProduk);
        base.clickElement(this, bohome.elements.buttonSearch);
        return base.pauseSleep(this.api, 5000);
      },
      verifyNameProduct: function(namaProduk){
        return base.assertContainsText(this, bohome.elements.listProdukPertama, namaProduk);
      },
      verifyJumlahStok: function(jumlahStok){
        return base.getStringText(this, bohome.elements.stokProduk, jumlahStok.toString());
      }
    }]
  }

  module.exports = bohome;
