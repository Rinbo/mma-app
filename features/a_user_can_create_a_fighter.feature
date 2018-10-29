@javascript
Feature: Create fighter
  As a user
  In order to add a fighter to the list
  I would like to have the ability to fill in his name in a form and have him added to the list

  Background:
  Given the follwing fighters are in the database
  | name  | description|
  | robin | yes        |
 
  Scenario: A user creates a fighter that gets added to the list and rendered on screen
   Given I visit the main page of the app
   And I fill in "Joel Romero" in the "Name" field
   And I fill in "Freak of nature" in the "Description" field
   And I click on "Submit"
