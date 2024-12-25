/// <reference types='Cypress' />

describe('Testing Demo', () => {


  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  });

  afterEach(()=>{
    cy.log('After each test')
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('contain','example.cypress.io')

  })

  it.skip('Assert Title', ()=>{
    cy.wait(200)
    cy.title().should('contain','Kitchen Sink')
  })

  it('Reload and logs', ()=>{
    cy.visit('https://example.cypress.io')
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })


})