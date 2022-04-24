describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/")
    cy.get("input[type=email]").should("exist")
    cy.get("input[type=password]").should("exist")
  })
})
