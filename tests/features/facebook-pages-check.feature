Feature: Check Facebook home page

Background:
  Given user is at facebook homepage
  Then user will see facebook page

@desktop @home @facebook @facebookhome
Scenario: Assertion Facebook home page
  When user click "Buat Halaman" button
  Then user will see facebook halaman page
    And user will see text gratis

@desktop @home @facebook @facebooklogin
Scenario: login Facebook home page
  When user fill username and password
  Then user will see user page
   