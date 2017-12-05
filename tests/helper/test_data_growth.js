const common = require('./common.js');

var existingAccountData = ({
    "user_login": "ferga.dipa@bizzy.co.id",
    "first_name": "Ferga",
    "middle_name": "",
    "last_name": "Dipa",
    "password": "12345678",
    "role": "user"
})

var newAccountData = ({
    "user_login": "user"+common.randomNumber()+"@bizzy.co.id",
    "first_name": "Ferga",
    "middle_name": "",
    "last_name": "Dipa",
    "password": "12345678",
    "role": "user"
})

var authenticateData = ({
        "username": "hannan@bizzy.com",
        "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
})

module.exports = {
    existingAccountData: existingAccountData,
    newAccountData: newAccountData,
    authenticateData: authenticateData
}