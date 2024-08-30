Feature: Remover Produtos do Carrinho

    Scenario: Remover produtos do carrinho
        Given que tenho algum produto no carrinho
        When eu removo o produto do carrinho
        Then o carrinho deve estar vazio