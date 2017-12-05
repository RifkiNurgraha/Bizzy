var common = {
    bearer: function(tokenselection) {
      if (tokenselection == 'correct_token') {
        return "X";
      } else if (tokenselection == 'incorrect_token') {
        return "Y";
      } else {
        return "";
      }
    },
    itResponse: function(response_code) {
      if (response_code == '200') {
        expectString = 'Should get response 200 OK';
      } else if (response_code == '201') {
        expectString = 'Should get response 201 OK';
      } else if (response_code == '401') {
        expectString = 'Should get response 401 Unauthorize';
      } else if (response_code == '442') {
        expectString = 'Should get response 422 Unprocessable Entity';
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
    randomBrandId: function() {
      min = 1;
      max = 1816;
      return (Math.floor(Math.random() * (max - min)) + min);
    }
};

module.exports = common;
