Feature: Check SeleniumEasy page

@seleniumeasy @dropdown
Scenario Outline: Practice dropdown
    Given user is at seleniumeasy dropdown list demo page
    When user choose "<day>" on day dropdown list
    Then user can see day selected "<day>"

    Examples:
    |day    |
    |Monday |
    |Tuesday|

@seleniumeasy @radiobutton
Scenario Outline: Practice radio button
    Given user is at seleniumeasy radio button demo page
    When user choose "<sex>" on sex list
    Then user can see sex choosen "<sex>"
    When user click get checked value button
    Then user can see sex text "<sex>" displayed

    Examples:
    |sex    |
    |Male   |
