describe('redifmail functionality',()=>{
    it('testcases for reddiffmail',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input[id="username"]').type('student')
        cy.get('input[id="password"]').type('Password123')
        cy.get('button[id="submit"]').click()
        
    })
})