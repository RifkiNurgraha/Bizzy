Feature: Check Merchant home page

Background: user in merchant home page
    Given user is at merchant homepage
    Then user will see merchant page

@merchant
Scenario: Assertion Login home page
  When user click "login" button in merchant home
  Then user will see login page
    And user will see text Masuk dengan Akun Bizzy Anda