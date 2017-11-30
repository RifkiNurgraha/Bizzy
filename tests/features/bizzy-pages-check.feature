Feature: Check Bizzy pages through link text

Background:
  Given user is at homepage
  Then the homepage title is correct
  When user scroll to the bottom

@desktop @home @bizzy @bizzyselect
Scenario: Assertion Bizzy Select page
  And user click on Bizzy Select
  Then user will see Bizzy Select page

@desktop @home @bizzy @bizzybenefit
Scenario: Assertion Bizzy Benefit page
  And user click on Bizzy Benefit
  Then user will see Bizzy Benefit page

@desktop @home @bizzy @bizzyoutline
Scenario Outline: Assertion Bizzy pages
  And user click on "<link_text>"
  Then user will see "<pages>" page

  Examples:
  | link_text     | pages         |
  | Bizzy Select  | Bizzy Select  |
  | Bizzy Benefit | Bizzy Benefit |
