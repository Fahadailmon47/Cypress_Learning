/// <reference types="cypress" />

it('Learning Assertions', () =>{
    cy.visit('https://example.cypress.io/')
    //cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.contains('get').click()


    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn btn btn-primary')
        .should('be.visible')
        .should('be.enabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')


})