import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { username, password } from "../dados";

Given("que tenho um produto no carrinho", () => {
  cy.login(username, password);
  cy.addProduto();
});

When("eu finalizo a compra", () => {
  cy.finalizarCompra();
});

// Then("devo ver uma mensagem de confirmação", () => {
//   cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
// });
