Feature: Check SeleniumEasy page

@seleniumeasy @dropdown
Scenario Outline: Practice dropdown
    Given user is at seleniumeasy dropdown list demo page
    When user choose <dayuio> on day dropdown list
    Then user can see day selected <day2>

    Examples:
    |dayuio   |day2|
    |Tuesday  |Tuesday|