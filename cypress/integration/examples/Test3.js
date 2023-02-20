/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').click().should('be.checked').and('have.value','option1')
    //or👉cy.get('#checkBoxOption1').click
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
  cy.get('input[type="checkbox"]').check(['option2','option3'])







    //fixture
  });
});
