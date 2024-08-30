import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { username, password, username_fail, password_fail } from "../dados";
import { selectorsList } from "../commands";

Given("que estou logado no sistema", () => {
  cy.login(username, password);
});

When("eu estou na página de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

Then("devo ver uma lista de produtos disponíveis", () => {
  cy.get(".inventory_item").should("have.length.greaterThan", 0);
});
