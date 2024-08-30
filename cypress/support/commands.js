export const selectorsList = {
  loginUsername: "[type='text']",
  loginPassword: "[name='password']",
  buttonSubmit: "[type='submit']",
  buttonAdd: "[name='add-to-cart']",
  backProducts: "[name='back-to-products']",
  buttonCar: "[data-test='shopping-cart-link']",
  firstName: "input[id='first-name']",
  lastName: "input[id='last-name']",
  zipCode: "input[id='postal-code']",
  iconCar: "[data-icon='shopping-cart']",
  buttonRemove: ".cart_button",
};

const Chance = require("chance");

const chance = new Chance();

Cypress.Commands.add(
  "login",
  (
    login_username = Cypress.env("login_username"),
    login_password = Cypress.env("login_password")
  ) => {
    const login = () => {
      cy.visit("https://www.saucedemo.com");
      cy.get(selectorsList.loginUsername).type(login_username);
      cy.get(selectorsList.loginPassword).type(login_password, { log: false });
      cy.get(selectorsList.buttonSubmit).click();
      cy.url().should("include", "/inventory.html");
    };
    login();
  }
);

Cypress.Commands.add("addProduto", () => {
  const addProduto = () => {
    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".inventory_item").eq(1).find("button").click();
  };
  addProduto();
});

Cypress.Commands.add("removerProduto", () => {
  const removerProduto = () => {
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").first().find("button").click();
  };
  removerProduto();
});

Cypress.Commands.add("finalizarCompra", () => {
  const finalizarCompra = () => {
    cy.get(selectorsList.firstName).type(chance.name());
    cy.get(selectorsList.lastName).type(chance.last());
    cy.get(selectorsList.zipCode).type(chance.zip());
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
  };
  finalizarCompra();
});

Cypress.Commands.add("logout", () => {
  const logout = () => {
    cy.get('[id="react-burger-menu-btn"]').should("be.visible");
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url();
  };
  logout();
});
