import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { username, password, username_fail, password_fail } from "../dados";
import { selectorsList } from "../commands";

Given("que estou na página de login", () => {
  cy.visit("/");
});

When("eu insiro um usuário válido", () => {
  cy.get(selectorsList.loginUsername).type(username);
});

When("eu insiro a senha correta", () => {
  cy.get(selectorsList.loginPassword).type(password);
  cy.get(selectorsList.buttonSubmit).click();
});

Then("devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

When("eu insiro um usuário inválido", () => {
  cy.get(selectorsList.loginUsername).type(username_fail);
});

When("eu insiro uma senha qualquer", () => {
  cy.get(selectorsList.loginPassword).type(password_fail);
  cy.get(selectorsList.buttonSubmit).click();
});

Then("devo ver uma mensagem de erro", () => {
  cy.get('[data-test="error"]').should("be.visible");
});
