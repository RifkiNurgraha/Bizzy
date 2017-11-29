Feature: Check SeleniumEasy page

@seleniumeasy @dropdown
Scenario Outline: Practice dropdown
    Given user is at seleniumeasy dropdown list demo page
    When user choose "<day>" on day dropdown list
    Then user can see day selected "<day>"

    Examples:
    |day    |
    |Tuesday|