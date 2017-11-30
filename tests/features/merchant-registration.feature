Feature: Check merchant center registratoin

Background:
    Given user is at merchant center homepage
    Then the merchant center hompepage tittle is correct

@merchant
Scenario: Register new account Merchant Center
    And user will see merchant registration page
    When user set firstname
        And user set "lastname"
        And user set "email"
        And user set "password"
        And user set "password confirmation"
        And user set "mobile phone"
        And user set "jabatan"
        And user click on register button
    Then user will see registration form




