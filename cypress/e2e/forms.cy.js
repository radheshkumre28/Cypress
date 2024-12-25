/// <reference types='Cypress' />


describe('forms, buttons, checkbox', ()=>{
    beforeEach(()=>{
        cy.visit('https://practice-automation.com/form-fields')
    })

    it('submit and assert form', ()=>{
        //visit
        cy.visit('https://practice-automation.com/form-fields')

        const name = 'radhesh'
        const password = 'kumre'
        const drink = 'Milk'
        const color = 'Yellow'
        const email = 'radhesh@gmail.com'
        const message = 'Done'

        //fill the form
        cy.get('#name-input').type(name)
        
        cy.get('[type="password"]').type(password)
        
        //checkbox
        cy.contains(drink).click()
        
        //radio-button
        cy.contains(color).click()

        //scroll
        cy.scrollTo('600')
        
        //Drop-Down
        cy.get('#automation').select('yes')
        // cy.get('[value="yes"]').click()
        
        //email
        cy.get('#email').type(email)
        
        //message
        cy.get('#message').type(message)
        
        //Submit Button
        cy.get('#submit-btn').click()

    })
})
