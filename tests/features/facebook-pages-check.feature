Feature: Check Facebook home page

Background:
  Given user is at facebook homepage

@desktop @home @facebook
Scenario: Assertion Facebook home page
  Then user will see facebook page
  When user click Buat Halaman Button
    And wait for 5 seconds
  Then user will see facebook halaman page
    And user will see text gratis

@desktop @home @facebook @facebooklogin
Scenario: login Facebook home page
  Then user will see facebook page
  When user fill username and password
    And user click Login button
  Then user wil see user page
