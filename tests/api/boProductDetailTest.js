const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../helper/common.js');
var productDetail = require('./../page-objects/api/boProductDetail.js');

var testData = {
  configurableId : "746",
  customerId : "120156"
};

var priceEngCalculation = function (resPriceEng) {
    var cogs = resPriceEng.cogs,
    bm = resPriceEng.variables.basicMargin,
    reb = resPriceEng.variables.rebate,
    salesAdj = resPriceEng.variables.salesAdj,
    subsidy = resPriceEng.variables.subsidy,
    costOfFund = resPriceEng.variables.costOfFund,
    topCustomer = resPriceEng.variables.topCustomer,
    topVendor = resPriceEng.variables.topVendor,
    topAdjRes = resPriceEng.variables.topAdj,
    weight = resPriceEng.variables.weight,
    weightInGram = resPriceEng.variables.weightInGram,
    handlingFee = resPriceEng.variables.handlingFee;

    var top, margin, sc, p;
    if (topCustomer-topVendor > 0) {
        top = topCustomer-topVendor;
    }
    else top = 0;
    topAdjRes = (Math.pow ((1 + ((1-(subsidy/100))*(costOfFund/100)/360)), top) - 1)*100;
    margin = (parseFloat(bm) + parseFloat(reb) + parseFloat(salesAdj)+ parseFloat(topAdjRes) );
    sc = weightInGram/1000*handlingFee
    p = cogs/(1-(margin/100))+sc;

    return (Math.round (p));
};

// GET /product/detail
productDetail.getProductDetail(testData.configurableId, testData.customerId, common.switchHeadersParameter(true, true), common.itResponse('200'), 'correct_token', function(response) {
  expect(response.status).to.equal(200);
  var data  = response.body.data;
  for(var key in data.data_variant){
      if (data.data_variant.hasOwnProperty(key)) {
          for(var i=0; i<data.data_variant[key].data.length; i++){
              for(var j=0; j<data.data_variant[key].data[i].tier_price.length; j++){
                  //expect(data.data_variant[key][i].tier_price[j].price).to.equal(priceEngCalculation(data.data_variant[key][i].tier_price[j].price_engine));
                  expect(data.data_variant[key].data[i].tier_price[j].price).to.equal(priceEngCalculation(data.data_variant[key].data[i].tier_price[j].price_engine));
              }
          }
      }
  }
});
