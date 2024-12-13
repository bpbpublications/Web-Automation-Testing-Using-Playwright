Feature: Login Functionality
  Background:
    Given Open the URL
  Scenario: Login and Logouut Functionality for site https://www.saucedemo.com/
    When User enter the username "<username>" and password "<password>"
    And User click on login button
    Then User logged in successfully
    When User click on HamburgerMenu
    And Logout from the site

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
 
  Scenario: Login,Add,Remove ProductFrom Cart Functionality for site https://www.saucedemo.com/
    When User enter the username "<username>" and password "<password>"
    And User click on login button
    Then User logged in successfully
    And User add product into the cart
    And User remove the product from the cart
    When User click on HamburgerMenu
    When Logout from the site

    Examples:
      | username    | password     |
      | visual_user | secret_sauce |