Feature: Finalizar Compra

    Scenario: Finalizar compra com sucesso
        Given que tenho um produto no carrinho
        When eu finalizo a compra
        Then devo ver uma mensagem de confirmação