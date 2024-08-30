# Projeto de Testes Automatizados de E-commerce com Cypress + Gherkin
Este projeto de testes automatizados foi desenvolvido para um e-commerce, utilizando o framework Cypress para automação de testes end-to-end. Para a geração de dados falsos, foi empregada a biblioteca Chance.js.

# Descrição
Este projeto tem como objetivo garantir a qualidade de um sistema de e-commerce através da automação dos principais fluxos de uso. Os testes foram organizados de maneira sequencial para assegurar que cada etapa seja validada corretamente, seguindo a ordem: Login,
visualização de produtos, adicionar um produto ao carrinho, remover algum produto do carrinho, finalizar a compra e logout do sistema.

# Estrutura de Testes

Este projeto contém uma suíte de testes automatizados para verificar as principais funcionalidades do sistema de e-commerce, incluindo login, visualização de produtos, manipulação do carrinho de compras, finalização de compra e logout.

## Funcionalidades Testadas

1. **Login**: Verifica se o usuário consegue fazer login com credenciais válidas.
2. **Visualização de Produtos**: Confirma se o usuário consegue visualizar a lista de produtos disponíveis.
3. **Adicionar Produto ao Carrinho**: Testa a funcionalidade de adicionar produtos ao carrinho de compras.
4. **Remover Produto do Carrinho**: Garante que o usuário possa remover produtos do carrinho.
5. **Finalizar Compra**: Verifica o fluxo de finalização de compra.
6. **Logout**: Confirma que o usuário pode efetuar logout do sistema.

## Tecnologias Utilizadas
Cypress: Framework para automação de testes end-to-end. 

Chance.js: Biblioteca para geração de dados falsos. 

Node.js: Ambiente de execução JavaScript necessário para o Cypress.

## Configuração e Execução dos Testes
Para configurar e executar os testes, siga as etapas abaixo:

## Clone o repositório para o seu ambiente local:
git clone https://github.com/soterovanessa/TesteSauceDemo.git

Navegue até a pasta raiz do projeto no terminal:

cd seu-repositorio

Instale as dependências listadas no arquivo package.json:

npm install

Execute os testes de diferentes maneiras:

Para executar todos os testes no terminal:

npm run cy:run

Para executar os testes no navegador:

npm run cy:open

## Após abrir o Cypress, você pode escolher os testes individuais para execução, seguindo a ordem recomendada:
1 - Login

2 - Visualização de Produtos

3 - Adicionar Produto ao Carrinho

4 - Remover Produto do Carrinho

5 - Finalizar Compra

6 - Logout

*Obs: a ordem das  funcionalidades dentro do projeto é ordenada por números.*

### Obs: Na ultima etapa, até o dia de hoje 30/08/2024, na página de finalização da compra, ao preencher as informações do campo "last name" , ele apaga a informação inserida no "fisrt name" e quando insiro o zip code, o campo "last name" fica vazio.Com isso fica impedido de realizar a finalização da compra, pois se trata de campos obrigatórios.
