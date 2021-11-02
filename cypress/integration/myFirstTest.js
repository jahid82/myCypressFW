/// <reference types="cypress" />

it("OrangeHrm test", () => {
  cy.visit("https://www.dailystar.co.uk/");
  cy.wait(17000);
  cy.get(":nth-child(1) > .btn-orange").click;
  cy.get(".text required").type("jahid");
});
