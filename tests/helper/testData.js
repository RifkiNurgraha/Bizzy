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
  "user_name": "Djoko"
});

var addItemBody = ({
  "session_id": "",
  "items": {
    "configurable_id": 746,
    "simple_id": 747,
    "sku": "1IokDeEewczrr6p7vbEC",
    "description": "bla bla",
    "vendor": {
      "id": "106152",
      "name": "PT DJ MC1 Sub1"
    },
    "uom": "Unit",
    "qty": 3,
    "weight": 3,
    "purchase_price": 6044,
    "sales_price": 5495
  }
});

module.exports = {
  customerBody: customerBody,
  cartNewBody: cartNewBody,
  addItemBody: addItemBody
}
