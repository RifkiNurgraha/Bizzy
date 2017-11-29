Feature: Login Merchant home page

Background: User in merchant home page
    Given user is at merchant login page
    Then user will see merchant login page

@merchant
Scenario: Login using valid account
    When user enter email and password
    Then user click "masuk" button in Login page
        And user will go to dashboard