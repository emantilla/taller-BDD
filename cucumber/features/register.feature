Feature: Register into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <name> <lastname> <email> <pass>
	And I select to 16 index
    And I try to register
    Then I expect to see <error>

    Examples:
      |name      | lastname  | email                       | pass       | error                                    |
      |          |           |                             |            | "Ingresa tu correo" |
	  | elkin    |           |                             |            | "Ingresa tu correo" |
      | elkin    | mantilla  |                             |            | "Ingresa tu correo" |
	  | elkin    | mantilla  | elkintmantilla1             |            | "Ingresa un correo" |
	  | elkin    | mantilla  | elkintmantilla1@hotmail.com |            | "Ingresa una contraseña" |
	  | elkin    | mantilla  | elkintmantilla1@hotmail.com |123         | "La contraseña debe" |
	  | elkin    | mantilla  | elkintmantilla1@hotmail.com |prueba123   | "Debes aceptar los" |
	  
Scenario Outline: Register failed with acept conditions

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <name> <lastname> <email> <pass>
	And I try to acept conditions
    And I try to register
    Then I expect to see error input
	
	Examples:
      |name      | lastname  | email                       | pass       | 
	  | elkin    | mantilla  | elkintmantilla1@hotmail.com |prueba123   | 
	  
Scenario Outline: Register success 

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <name> <lastname> <email> <pass>
	And I select to 16 index
	And I try to acept conditions
    And I try to register
	Then I expect to see button ok
	
	Examples:
      |name      | lastname  | email                       | pass       | 
	  | elkin    | mantilla  | elkintmantilla1@hotmail.com |prueba123   | 
	  