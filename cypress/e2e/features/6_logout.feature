Feature: Logout

    Scenario: Usuário faz logout com sucesso
        Given que realizei o login
        When eu clico no botão de logout
        Then devo ser redirecionado para a página de login