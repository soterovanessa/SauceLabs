Feature: Visualização de Produtos

    Scenario: Ver lista de produtos após login
        Given que estou logado no sistema
        When eu estou na página de produtos
        Then devo ver uma lista de produtos disponíveis