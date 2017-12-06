Feature: Check login

Background:
    Given user is at account login page
    Then user can see account login page

@accountlogin
Scenario: User can login using correct user login and correct password
    When user input office email "<ferga.dipa@bizzy.co.id>" on user login textfield
    And user input password "<12345678>" on password textfield
    And user click submit login button
    Then user can login successfully

@accountlogin
Scenario: User cannot login using correct user login and wrong password
    When user input office email "<ferga.dipa@bizzy.co.id>" on user login textfield
    And user input password "<87654321>" on password textfield
    And user click submit login button
    Then user cannot login