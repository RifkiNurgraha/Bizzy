Feature: Check Bizzy pages through link text

Background:
  Given user is at homepage
  Then the homepage title is correct
  When user scroll to the bottom

@desktop @home @bizzyselect
Scenario: Assertion Bizzy Select page
  And user click on Bizzy Select
  Then user will see Bizzy Select page

@desktop @home @bizzybenefit
Scenario: Assertion Bizzy Benefit page
  And user click on Bizzy Benefit
  Then user will see Bizzy Benefit page
