import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/");
});

When("eu insiro um usuário válido", () => {
  cy.get('[data-test="username"]').type("standard_user");
});

When("eu insiro a senha correta", () => {
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Then("devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

When("eu insiro um usuário inválido", () => {
  cy.get('[data-test="username"]').type("invalid_user");
});

When("eu insiro uma senha qualquer", () => {
  cy.get('[data-test="password"]').type("wrong_password");
  cy.get('[data-test="login-button"]').click();
});

Then("devo ver uma mensagem de erro", () => {
  cy.get('[data-test="error"]').should("be.visible");
});
