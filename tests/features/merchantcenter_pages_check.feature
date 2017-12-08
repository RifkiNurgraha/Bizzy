Feature: Check merchantCenter home page

Background:
 Given user is at merchantCenter homepage

@desktop @sanity @happy @home @merchantCenter
Scenario: Assertion merchantCenter home page
  Then user will see merchantCenter page

@desktop @sanity @happy @home @merchantCenter @merchantCenterlogin
Scenario: login merchantCenter home page
  When user click button masuk mc
  Then user fill email and password mc
  Then user will see user page mc

@desktop @sanity @happy @home @merchantCenter @merchantCenterlogout
Scenario: logout merchantCenter home page
  When user click button masuk mc
  Then user fill email and password mc
  Then user will see user page mc
  Then user click button dropdown profile mc
  Then user click button dropdown profile mc
  Then user click link signout mc
  Then user will see homepage mc