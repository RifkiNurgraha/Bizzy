var customerBody = (
  {
  "data" : {
    "customer_type" : 2,
    "customer" : {
      "name": "PT. Mocha Test",
      "email": "tester.bizzy+ptdj100102@gmail.com",
      "account_manager" : 49029,
      "npwp": "",
      "telephone_number":"+6281223331433",
      "fax": "+6281223331434",
      "rebate":10,
      "allowed_payment": "14",
      "credit_limit" : "50000001",
      "credit_limit_currency" : "IDR",
      "invoice_type": 0
    },
    "addresses" : [{
      "status": 1,
      "label": "PT. DJ 100101",
      "country_id": "ID",
      "region_name": "Jakarta",
      "city": "Jakarta Selatan",
      "district": "Tebet",
      "subdistrict": "Tebet Barat",
      "postcode": "12810",
      "street1": "Jl. Industri 1A",
      "street2": "Kec. Seberang Kel. Jalan",
      "name": "Rec 1",
      "dest_company_name" : "PT. DJ 100101",
      "npwp": "",
      "telephone_number": "+6281223331433",
      "external_default_billing": true,
      "external_default_shipping": true,
      "is_select": false
    }]
  }}
);

var cartNewBody = ({
  "session_id": "",
  "user_name": "Djoko",
  "user_email": "djoko.haryono@bizzy.co.id"
});

var addItemBody = ({
  "session_id": "",
  "items": {
    "configurable_id": 746,
    "simple_id": 747,
    "sku": "1IokDeEewczrr6p7vbEC",
    "description": "Black 128Gb",
    "vendor": {
      "id": "106152",
      "name": "PT DJ MC1 Sub1"
    },
    "uom": "unit",
    "qty": 2,
    "weight": 2,
    "purchase_price": 12543737,
    "sales_price": 10000000
  }
});

var addActivityLog = ({
  "source": "",
  "name": "mochachaitest name",
  "description": "mochachaitest description",
  "action": "",
  "module_name": "mochachaitest module name",
  "data": "{\"original\":\"{\"name\":\"old_name\"},{\"new_value\":\"{\"name\":\"new name\"}\"}"
});
var queryEmployeeList = (
  {
      "employee_name": "Admin",
      "employee_email": "admin@bizzy.co.id",
      "role_name": "Software Development Engineer in Test",
      "team_name": "Technology",
      "sort_asc": "asc",
      "team_id" : 0,
      "team_id_lead" : 4,
      "team_id_tech" : 11,
      "team_id_pop" : 8,
      "team_id_sales" : 10,
      "sort_name": "employee_name",
      "sort_team": "team_id",
      "sort_jabatan": "role_id"
  }
);
var postDataLogin = (
  {
    "username": "admin@bizzy.co.id",
    "password": "admin"
  }
);
var responseCode = (
  {
    "ok": 200,
    "created": 201,
    "accepted": 202,
    "no_content": 204,
    "bad_request": 400,
    "unauthorized": 401,
    "forbidden": 403,
    "not_found": 404,
    "method_not_found": 405,
    "too_many_requests": 429,
    "internal_server_error": 500,
    "service_unavailable": 503
  }
);
var bodyLogin= function (roles) {
  var body = postDataLogin ();
  if (roles == 'Admin') {
    body.username = 'admin@bizzy.co.id';
    body.password = 'bizzy123';
  }
  else if (roles == 'Vendor2') {
    body.username = 'vendor@bukalapan.com';
    body.password = 'bizzy123';
  }
  else if (roles == 'Vendor3') {
    body.username = 'vendor@tokoledia.com';
    body.password = 'bizzy123';
  }
  else if (roles == 'Vendor4') {
    body.username = 'vendor@ildav.com';
    body.password = 'bizzy123';
  }
  else if (roles == 'salesAdmin') {
    body.username = 'salesadmin1.ecart@bizzy.co.id';
    body.password = 'bizzy123';
  }
  else if (roles == 'buyerAdmin') {
    body.username = 'buyer@bizzy.co.id';
    body.password = 'bizzy123';
  }
  else if (roles == 'financeSpecialist') {
    body.username = 'finance.specialist@bizzy.co.id';
    body.password = 'bizzy123';
  }
  return body;
}

module.exports = {
  customerBody: customerBody,
  cartNewBody: cartNewBody,
  addItemBody: addItemBody,
  addActivityLog: addActivityLog,
  getEmployeeList: queryEmployeeList,
  postDataLogin: postDataLogin,
  responseCode: responseCode,
  bodyLogin: bodyLogin,
};  
