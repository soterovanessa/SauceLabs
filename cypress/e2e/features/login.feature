Feature: Login

  Scenario: Login com usuário válido
    Given que estou na página de login
    When eu insiro um usuário válido
    And eu insiro a senha correta
    Then devo ser redirecionado para a página de produtos