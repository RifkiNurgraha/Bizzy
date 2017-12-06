Feature: Check registration

Background:
    Given user is at account registration page
    Then user can see account registration page

@accountregistration
Scenario:
    When user input first name "<Tester>"
    And user input last name "<Bizzy>"
    And user input office email "<tester.bizzy@bizzy.co.id>"
    And user input password "<12345678>"
    And user click create account button
    Then user can create account successfully