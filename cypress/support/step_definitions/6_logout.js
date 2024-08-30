import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { username, password } from "../dados";

Given("que realizei o login", () => {
  cy.login(username, password);
});

When("eu clico no botão de logout", () => {
  cy.logout();
});

Then("devo ser redirecionado para a página de login", () => {
  cy.url().should("include", "/");
  cy.get('[data-test="login-button"]').should("be.visible");
});
