describe('test sute(login verification page)',()=>{
    it('test case name(login with valid credebsials)',()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible')
        cy.contains('You logged into a secure area!').should('be.visible')
        //cy.contains('Your username is invalid!').should('be.visible')
        //cy.get('[class="close"]').should('be.visible')
        cy.contains(' Logout').click()
        cy.contains(' Login Page').should('be.visible')
    })
})