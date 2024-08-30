import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { username, password } from "../dados";

Given("que tenho algum produto no carrinho", () => {
  cy.login(username, password);
  cy.addProduto();
});

When("eu removo o produto do carrinho", () => {
  cy.removerProduto();
});

Then("o carrinho deve estar vazio", () => {
  cy.get(".shopping_cart_badge").should("contain", "1");
});
