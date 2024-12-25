/// <reference types='Cypress' />



describe('Modals', () => {
  it('Simple Modals', () => {
    cy.visit('https://practice-automation.com/modals')

    //simple modal
    cy.get('#simpleModal').click()

    //Assert modal
    cy.get('#pum_popup_title_1318').should('contain.text','Simple Modal')
    cy.get('p').should('contain.text', 'Hi, I’m a simple modal.')

    //Close again
    cy.get('.pum-close').click({force:true})
  })
})