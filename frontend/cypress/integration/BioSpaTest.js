// https://github.com/bahmutov/test-material-ui

describe("renders the homepage", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.contains("eksklusiivne");
  });
});

describe("chooses the diseases, presses the button", () => {
  it("chooses procedures matching target ", () => {
    cy.visit("/");
    cy.find();
  });
});
