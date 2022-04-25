Feature: Git Hub features

  Scenario: POSITIVE : Create new repository
    When I try to create new repository with following details:
      | name     | autoInit | isPrivate | gitignoreTemplate |
      | repo1334 | true     | true      | nanoc             |
    Then status code is 201
    And Response property "name" is "repo1334"

  Scenario: POSITIVE : Update repository
    Given I try to create new repository with following details:
      | name      | autoInit | isPrivate | gitignoreTemplate |
      | forUpdate | true     | true      | nanoc             |
    When I try to update an existing repository "forUpdate" with following details:
      | name        |
      | updatedRepo |
    Then status code is 200
    And Response property "name" is "updatedRepo"

  Scenario: POSITIVE : Delete repository
    Given I try to create new repository with following details:
      | name      | autoInit | isPrivate | gitignoreTemplate |
      | forDelete | true     | true      | nanoc             |
    When I try to delete an existing repository "forDelete"
    Then status code is 204

  Scenario: NEGATIVE : Create new repository - unknown gitignoreTemplate
    When I try to create new repository with following details:
      | name     | autoInit | isPrivate | gitignoreTemplate |
      | repo1334 | true     | true      | 123               |
    Then status code is 422
    And error message contains "gitignore_template is an unknown gitignore template."

  Scenario: NEGATIVE : Create new repository - empty name
    When I try to create new repository with following details:
      | name | autoInit | isPrivate | gitignoreTemplate |
      |      | true     | true      | nanoc             |
    Then status code is 422
    And error message contains "name is too short (minimum is 1 character)"

