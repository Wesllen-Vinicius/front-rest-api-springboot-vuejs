describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").click().type("Vinicius");
    cy.get("#password").click().type("123456");
    cy.get(".group").click();
    cy.get(".mb-1").should("contain", "Vinicius");
  });
});
