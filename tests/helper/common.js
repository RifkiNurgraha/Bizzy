var common = {
    magento: "http://beta-mp.bizzy.co.id/rest/V1",
    bearer: function(tokenselection) {
      if (tokenselection == 'correct_token') {
        return "Bearer msqr0v8lnp8yusincu875ubt6koa78i6";
      } else if (tokenselection == 'incorrect_token') {
        return "Bearer tokensalahxxx";
      } else {
        return "";
      }
    },
    itResponse: function(response_code) {
      if (response_code == '200') {
        expectString = 'Should get response 200 OK @200';
      } else if (response_code == '401') {
        expectString = 'Should get response 401 Unauthorize @401';
      } else {
        expectString = 'Should get response 500 internal server error'
      }
      return expectString;
    },
    switchHeadersParameter: function(header, parameter) {
      if (header && parameter) {
        descriptionString = 'With correct parameters and headers';
      } else if (!header && parameter) {
        descriptionString = 'With correct parameters and incorrect headers';
      }
      return descriptionString;
    },
    randomNumber: function() {
      min = 100000000000000;
      max = 999999999999999;
      return (Math.floor(Math.random() * (max - min)) + min).toString();
    }
};

module.exports = common;
