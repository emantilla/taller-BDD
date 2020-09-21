Feature: Check station info

  @user1
  Scenario: As a user I want to be able to get inside taximetro section
    #button to remove the splash screen
    Given I press "Paraderos"
    # Get inside menu
    When I swipe left
    # Open taximetro section
    And I press "Taximetro"    
    Then I should see "Unidades"


  @user1
    Scenario: As a user I want to be able to search for a specific station
      #button to remove the splash screen
      Given I press "Paraderos"
      # Get inside menu
      When I swipe left
      # Open taximetro section
      And I press "Taximetro"
      Then I enter text "([^\"]*)" into field with id "([^\"]*)" do |100, 1|

     