Feature: Adicionar Produtos do Carrinho

    Scenario: Adicionar produtos ao carrinho
        Given que estou na página de produtos
        When eu adiciono um produto ao carrinho
        Then o carrinho deve conter esse produto