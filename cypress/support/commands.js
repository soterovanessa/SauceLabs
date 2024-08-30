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
};

Cypress.Commands.add(
  "login",
  (
    login_username = Cypress.env("login_username"),
    login_password = Cypress.env("login_password")
  ) => {
    const login = () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get(selectorsList.loginUsername).type(login_username);
      cy.get(selectorsList.loginPassword).type(login_password, { log: false });
      cy.get(selectorsList.buttonSubmit).click();
      cy.url().should("include", "/inventory.html");
    };
    login();
  }
);
