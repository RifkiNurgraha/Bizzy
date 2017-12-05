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

module.exports = {
    existingAccountData: existingAccountData,
    newAccountData: newAccountData
}