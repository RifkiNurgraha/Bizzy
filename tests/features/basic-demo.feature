Feature: Basic Demo Page

Background:
  Given user goto basicdemo page

@demobasic @demobasic1
Scenario: Get Result Section 1
  When user see title "section1"
  Then user enter message
  When click "Show Message" button
  Then user will see text result "section1"

@demobasic @demobasic2
Scenario: Get Result Section 2
  When user see title "section2"
  Then user enter A and B
  When click "Get Total" button
  Then user will see text result "section2"