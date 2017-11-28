Feature: Check SeleniumEasy page

@seleniumeasy @dropdown
Scenario: Practice dropdown
    Given user is at seleniumeasy dropdown list demo page
    When user choose Wednesday on day dropdown list
    Then user can see day selected Wednesday