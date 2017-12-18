Feature: Check phoenixHome home page

#Background:
   #Given user is at phoenixHome homepage
   #Then user can see phoenixHome page
	
@desktop @all @happy @catalog @catalogSearch
Scenario: 
   Given user is at phoenixHome homepage
   Then user can see phoenixHome page
   When user search with keyword "lgaaaaaaaaaaaaaaaaaaaaaaaaa"
   #And user click select button