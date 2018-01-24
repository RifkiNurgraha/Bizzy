Feature: Basic Demo Page

Background:
  Given user goto basicdemo page

@demobasic @demobasic1
Scenario Outline: Get Result Section 1
  When user see title "section1"
  Then user enter "<msg>"
  When click "Show Message" button
  Then user will see text result "<msg>"

  Examples:
    |msg                    |
    |Hai                    |
    |How are you            |
    |How do you do          |
    |What are you doing now |

@demobasic @demobasic2
Scenario Outline: Get Result Section 2
  When user see title "section2"
  Then user enter "<number_a>" and "<number_b>"
  When click "Get Total" button
  Then user will see text result "<number_a>" and "<number_b>"

  Examples:
    |number_a   |number_b    |
    |1          |29          |
    |2          |39          |
    |3          |49          |
    |4          |59          |
    |5          |69          |
    |6          |79          |