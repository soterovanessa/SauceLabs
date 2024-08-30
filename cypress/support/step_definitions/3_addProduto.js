import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { username, password } from "../dados";

Given("que estou na página de produtos", () => {
  cy.login(username, password);
});

When("eu adiciono um produto ao carrinho", () => {
  cy.addProduto();
});

Then("o carrinho deve conter esse produto", () => {
  cy.get(".shopping_cart_badge").should("contain", "2");
});
