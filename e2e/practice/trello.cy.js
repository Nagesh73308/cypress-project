describe("trellotest sute", () => {
  it("testcases", () => {
    cy.visit("https://trello.com/");
    cy.contains("Log in").click();
    cy.origin("https://id.atlassian.com",() => {
      cy.url().should("include", "https://id.atlassian.com/");
      cy.get("#username").type("nageshmahesh111@gmail.com");
      cy.contains('Continue').click()
      cy.get('#password').type('ffvwfcydcvyfa@5376459')
      cy.contains('Log in').click({force:true})
    });
  });
});
