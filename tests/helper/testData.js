var randomstring = require("randomstring");

var createBrandBody = ({
  "name": randomstring.generate(10)
});
var updateBrandName = ({
  "name": createBrandBody.name + 'update'
})
var checkDuplicateBrandBody =({
"message": "Brand Already Exist"
});
module.exports = {
  createBrandBody:createBrandBody,
  checkDuplicateBrandBody:checkDuplicateBrandBody,
  updateBrandName:updateBrandName
}
