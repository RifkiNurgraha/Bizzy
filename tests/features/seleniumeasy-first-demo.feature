@hardi
Feature: firts demo selenium

Scenario: input message
    Given user is at seleniumeasy first demo
    When user input message
    Then user click show message
    Then user can see message inputed
@penjumlahan
Scenario Outline: count total value
    Given user is at seleniumeasy first demo
    When user input "<valueA>" for first value
    When user input "<valueB>" for second value
    Then user click button total
    Then insert "<valueA>" "<valueB>" you can see total value

    Examples:
    |valueA||valueB|
    |1||2|
    |2||2|
    |a||2|
    |2||v|
    |b||c|