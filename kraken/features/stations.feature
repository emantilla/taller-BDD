Feature: Check station info

  @user1
  Scenario: As a user I want to be able to look for a station info
    #button to remove the splash screen
    Given I press "Paraderos"
    # Get inside stations menu
    Given I press "Paraderos"
    # To open Transmilenio stations
    When I press "TRANSMILENIO"    
    And I press "Alquería"
    Then I should see "B11"


  