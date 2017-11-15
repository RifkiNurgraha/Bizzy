Feature: Check Facebook home page

Background:
  Given user is at facebook homepage

@desktop @home @facebook
Scenario: Assertion Facebook home page
  Then user will see facebook page
