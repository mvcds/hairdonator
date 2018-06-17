Feature: Donate Hair
  As a donator
  I want to give my hair
  In order to make a patient feel better

  Scenario: Happy path
    Given a valid donator
    When hair is donated
    Then the receiver is told about donation
      And donator is thanked

  Scenario: Hairy donation day
    Given an invalid donator
    When hair is donated
    Then the donator is told their hair ain't good