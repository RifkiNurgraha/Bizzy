Feature: assert nama barang dan jumlah di BO customer

Background:
  Given user is at bizzy page
  Then user will see bizzy page
  When user click "Masuk" tombol
  Then user will see bizzy login page
  When user set username and password

@boLogin 
Scenario Outline: login Bo as customer
  Then user will see back office page
  When user go to menu "daftar produk" page
  When user search "<namaProduk>" in list of product
  Then user can see product "<namaProduk>" found
  Then user can verify stok "<jumlahStok>"

    Examples:
    |namaProduk||jumlahStok|
    |Dunlop SP Sport 01||10000|
