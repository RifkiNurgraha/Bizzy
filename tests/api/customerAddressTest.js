const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../helper/common.js');
var customerAddress = require('./../page-objects/api/customerAddress.js');

var customerId = {
    idJakarta: 12,
    idJateng: 13
}

var customerAddressString = {
descriptionPositive: 'Magento Customer Address - Correct Token',
descriptionNegative: 'Magento Customer Address - Incorrect Token',
    describeIt: {
        regionJakarta: 'Region Jakarta',
        regionJateng: 'Region Jawa Tengah'
    }
    
};

customerAddress.getCustomerAddress(customerId.idJateng, customerAddressString.descriptionPositive, customerAddressString.describeIt.regionJateng, 'correct_token', function(response){
    expect(response.status).to.equal(200);
    expect(response.body.region.region).to.contain('Jawa Tengah');
});

customerAddress.getCustomerAddress(customerId.idJateng, customerAddressString.descriptionNegative, customerAddressString.describeIt.regionJateng, 'incorrect_token', function(response){
    console.log(response.status);
    expect(response.status).to.equal(401);
});


