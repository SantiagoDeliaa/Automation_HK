
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('doType', (locator, text) => { 
    cy.get(locator).should('be.visible')
    cy.get(locator).type(text)
});

Cypress.Commands.add('doClick', (locator) => {
    cy.get(locator).should('be.visible')
    cy.get(locator).click()
});