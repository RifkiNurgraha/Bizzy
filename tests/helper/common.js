var common = {
    bearer: function(tokenselection) {
      if (tokenselection == 'correct_token') {
        return "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI0MjkwNGU5OTczMzA1N2Q3MWI4MTlmY2RhZjhmOGZiMzkwMTVkMDZmMjNmMDcxMjNiYTk0MjY1NGYzYzA4YWVhMDkyMTg0Mzg0NDA5NTA5In0.eyJhdWQiOiI1ODMyYTQyZGE5YWY2OTMzMDcwYmNjNjMiLCJqdGkiOiIyNDI5MDRlOTk3MzMwNTdkNzFiODE5ZmNkYWY4ZjhmYjM5MDE1ZDA2ZjIzZjA3MTIzYmE5NDI2NTRmM2MwOGFlYTA5MjE4NDM4NDQwOTUwOSIsImlhdCI6MTQ5NDg1MjgxNiwibmJmIjoxNDk0ODUyODE2LCJleHAiOjE1MjYzODg4MTYsInN1YiI6IjQ0OTljNjE1ODIiLCJzY29wZXMiOltdfQ.p73OhSjq77ZHpMZuQXBuU_CXx591H7uKctXrpSpb-1ARkb_XgebTwgOVMAZ5JQ0dH5JGOKfC9_EYKsPs0pO4Nk2dpj8Gurrf1zNCLEXliueZupDKbnYHB_1F118b4HNAH07oGQsX6w6__Ms72mAHDLj-1cWKd3VCMiG3j8p9CeOqsgA2a5lWFdPeZ1q9JoE5QtSttrtS6zhP-JOwqir5MumnAYgj8REjIMkwM_3E8GXHNe0PIQ5NXqt2ePSaetBvZRtNAmzm0_NO7SyqSZD2T6rFUKEIeultiVBonpjR25FtraxyKlAbbGzkpstvwQZRUkXU0ivkunZagNI4ljEjfL-8UN1fclltV8RITM-dtgrBWUZY_ZKLkFidbRA0Zb9PeHvx4wgUNcrZ26369AdFZW6asHLnn1MWbbRq8J5N4gpUt3u9JHgJlV9E8wThCBipn74iIKdaTA_Vqzqke4QDx2DLYUihlXk2q6fgmyBUbhBAETrT-KZer6cchclSQgRBtafv-Pj7Ba6utSy7C9JEsJSQXglHDzAJ-gXNMs0oACWSOS7c9fr_zgCC4G3VIUVw44nO4QoX0UhBHeK_NaigLTG8C-T1bDuFwnDQiRsUYAQ6degtqANFQjGcRPQ1pLQGc3-kJMZd_THD88zX7Smi20x6_DN11NEiiwGRfzdWbts";
      } else if (tokenselection == 'incorrect_token') {
        return "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI";
      } else {
        return "";
      }
    },
    itResponse: function(response_code) {
      if (response_code == '200') {
        expectString = 'Should get response 200 OK';
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
    randomNumber: function() {
      min = 100000000000000;
      max = 999999999999999;
      return (Math.floor(Math.random() * (max - min)) + min).toString();
    }
};

module.exports = common;
