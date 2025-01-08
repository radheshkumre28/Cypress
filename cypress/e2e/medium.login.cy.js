/// <reference types = "Cypress" />

describe('Session and origin let go it', ()=>{
    const googleCredentials = {
        email: 'testradhesh@gmail.com',
        password: 'test@radhesh#2024',
      };

    before(()=>{
        Cypress.config('defaultCommandTimeout',10000);
        cy.viewport('macbook-16')
    })

    beforeEach(()=>{

        cy.session('Google-login',()=>{
            cy.visit('https://medium.com/m/signin')

            cy.contains('Sign in with Google').click({force : true})

            cy.origin('https://accounts.google.com', { args: { googleCredentials } }, ({ googleCredentials }) => {

            
              cy.get('#identifierId', { timeout: 15000 }).should('be.visible'); // wait untill visible
              cy.get('#identifierId').type(googleCredentials.email);
              cy.contains('Next').click();
              cy.get('input[type="password"]').type(googleCredentials.password, { log: false });
              cy.get('#passwordNext').click()

            })

            cy.log(cy.url())

            
        })
        
    })

    it('Go to Home page of Medium', ()=>{
        cy.log('This is the home page')
    })

})