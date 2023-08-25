it("should load the page", () => {
  cy.visit("/");
  cy.title().should("eq", "Neher Data Systems");
});

it("should have working footer links", () => {
  cy.visit("/");
  cy.select;
});

it("click all icons in icon bars with loop", () => {
  cy.visit("/");

  cy.get(icon).each().click();
  cy.url().should("contain", `https`);
  cy.go("back");
});
