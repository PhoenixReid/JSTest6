

Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

    Cypress.Commands.add("RegBook", (title, describe,author) => {
      cy.get(".p-0 > .btn").click();
    cy.get('#title').type(title);
    cy.get('#description').type(describe);
    cy.get('#authors').type(author);
    cy.get('#favorite').click();
    cy.get('#fileCover').click();
    cy.get('form > .ml-2').click();
    
    });