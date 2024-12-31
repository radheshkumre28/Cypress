/// <reference types='Cypress' />


describe('Fibonacci Calculator', ()=>{

    const tenFibonacciNumber = 55
    const twentyFibonacciNumber = 6765
    const hundredFibonacciNumber = 354224848179261915075 
    before(() => {
        // Set the default command timeout to 10 seconds
        Cypress.config('defaultCommandTimeout', 10000);
      });

    it.skip('Check 100th Fibonaaci number',()=>{

        cy.viewport("macbook-16")

        cy.visit('https://qa.hiring.evenhealthcare.com')
        cy.get('#identifierId').type('testradhesh@gmail.com')
        cy.wait(200)
        cy.contains('Next').click()
        cy.get('[type="password"]').type('test@radhesh#2024')
        cy.wait(200)
        cy.get('#passwordNext').click()
        cy.wait(5000)

    })


    const googleCredentials = {
      email: 'testradhesh@gmail.com',
      password: 'test@radhesh#2024',
    };
    describe('SSO Login Test with cy.origin', () => {
        beforeEach(() => {
          cy.session('google-login', () => {

      
            // Visit the primary domain and let it redirect to Google SSO
            cy.visit('https://qa.hiring.evenhealthcare.com');
      
            // Use cy.origin to handle the Google SSO domain
            // cy.origin('https://accounts.google.com', { args: { googleCredentials } }, ({ googleCredentials }) => {
              // Perform login steps within Google domain
              cy.get('#identifierId').type(googleCredentials.email);
              cy.contains('Next').click();
              cy.get('input[type="password"]').type(googleCredentials.password, { log: false });
              cy.get('#passwordNext').click()
            // });
      
            // Assert that we are redirected back to the original domain
            // cy.url().should('include', 'https://qa.hiring.evenhealthcare.com');
          });
        });
      
        it('Validate Post-Login Behavior', () => {
          // Reuse the session and visit the application
          cy.visit('https://qa.hiring.evenhealthcare.com');

          cy.get('.ant-input').type(100)
          cy.contains('Calculate!').click()
          cy.get('.ant-alert').should('have.text','The 100th fibonacci number is 354224848179261915075.')
        });
      });
      
      
      

      

})