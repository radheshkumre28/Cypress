/// <reference types='Cypress' />


describe('Hover', ()=>{
    it('Hover the mouse', ()=>{
        cy.viewport('macbook-16')
        cy.visit('https://practice-automation.com/hover')

        //hover the mouse
        cy.get('#mouse_over').trigger('mouseover')

        //assert
        cy.contains('You did it!')
    })
})