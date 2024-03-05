

describe('test sute for parabank',()=>{
    it("Registration test case",()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.title().should('includes',' | Online Banking' )
        cy.url().should('eq',"https://parabank.parasoft.com/parabank/index.htm")
        cy.contains('Register').click()
        cy.get('[id="customer.firstName"]').type('ghvgvvhvhvgyc')
        cy.get('[id="customer.lastName"]').type('vgvguvvgu')
        cy.get('[id="customer.address.street"]').type('cfxdtcfxcj')
        cy.get('[name="customer.address.city"]').type('ctfxdtxtxtx')
        cy.get('[name="customer.address.state"]').type('cxcycxv')
        cy.get('[id="customer.address.zipCode"]').type('4864346')
        cy.get('[id="customer.phoneNumber"]').type('363475756745')
        cy.get('[name="customer.ssn"]').type('9876842643')
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('[id="customer.username"]').type('Nageshh'+r)
        cy.get('[id="customer.password"]').type("nnn@1234"+r)
        cy.get('[id="repeatedPassword"]').type('nnn@1234'+r)
        cy.get('[value="Register"]').click()
        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')
        cy.contains('Log Out').click()
        cy.contains('Customer Login').should('be.visible')
        cy.get('[name="username"]').type('nageshh'+r)
        cy.get('[name="password"]').type('nnn@1234'+r)
        cy.get('[value="Log In"]').click()
        //cy.contains('Accounts Overview').should('be.visible')
        //cy.contains('Log Out').click()
        //cy.get('[id="headerPanel"]').should('be.visible')
       


    })
})