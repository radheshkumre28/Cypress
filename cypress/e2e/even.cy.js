/// <reference types='Cypress' />


describe('Fibonacci Calculator', ()=>{

    const tenFibonacciNumber = 55
    const twentyFibonacciNumber = 6765
    const hundredFibonacciNumber = 354224848179261915075 

    it('Check 100th Fibonaaci number',()=>{

        cy.viewport("macbook-16")

        cy.visit('https://qa.hiring.evenhealthcare.com')
        cy.get('#identifierId').type('testradhesh@gmail.com')
        cy.contains('Next').click()
        cy.get('[type="password"]').click()

    })
})