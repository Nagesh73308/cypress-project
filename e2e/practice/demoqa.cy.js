describe("demoqa testsute",()=>{
    it('test cases',()=>{
        
 Cypress.on("uncaught:exception", () => {
            return false;
            });      
             cy.visit('https://demoqa.com/elements')
        // cy.contains('Text Box').click()
        // cy.get('[placeholder="Full Name"]').type('Nagesh Bandi')
        // cy.get('[placeholder="name@example.com"]').type('gcdgegvhsfghcv@gmail.com')
        // cy.get('[id="currentAddress"]').type("chfzgcwefcvjweCfyqejfhwecvsdbcvchBDFEFEHWFIOQELDHJQEBFHQvvcqwdghq")
        // cy.get('[id="permanentAddress"]').type('cgcuavgwdfasdhvwr')
        // cy.contains('Submit').click()
        // cy.get('[id="output"]').should("be.visible")
        // cy.contains('Check Box').click()
        // cy.get('[class="rct-icon rct-icon-parent-close"]').click()
        // cy.get('[id="result"]').should('be.visible')
        // cy.contains('Radio Button').click()
        // cy.get('[id="yesRadio"]').check({force:true})
        // cy.get('[class="mt-3"]').should('be.visible')
        cy.contains('Web Tables').click()
        cy.contains('Web Tables').should('be.visible')
        cy.get('[id="addNewRecordButton"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('[placeholder="First Name"]').type('vdvvfVF HFvjBv'+r)
        cy.get('[id="lastName"]').type('VffVSD VvBf')
        cy.get('[id="userEmail"]').type('hcvzxbsdhv@gmail.com')
        cy.get('[id="age"]').type('26')
        cy.get('[id="salary"]').type('6237845747475')
        cy.get('[id="department"]').type('QA engineer')
        cy.get('[id="submit"]').click()
        cy.get('[class="rt-tr -even"]').eq(1).should('be.visible')





    })
})