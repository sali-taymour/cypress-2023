/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .click()
      .should("be.checked")
      .and("have.value", "option1");
    //or👉cy.get('#checkBoxOption1').click
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    //satatic Drropdown
    cy.get("select").select("option2").should("have.value", "option2");
    //Dynamic Dropdouwns
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text()=== "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");


    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('be.not.visible')
    cy.get('[value=radio2]').check().should('be.checked')
    //fixture
  });
});
