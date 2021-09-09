/// <reference types="cypress" />


it('Should be able to add new Todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo', {timeout: 6000}).type("Clean Room{enter}")
    cy.get('.toggle').click()
    cy.contains('Clear completed').click()

})