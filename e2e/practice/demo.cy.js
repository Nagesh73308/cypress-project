describe("test suit(login functionality)",()=>{
    it.only("test cases(verify the login with valied details)",()=>{
        cy.visit(Cypress.env('endUrl'))
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.contains(' Login ').click()
        cy.contains('Quick Launch').should('be.visible')
    })
})