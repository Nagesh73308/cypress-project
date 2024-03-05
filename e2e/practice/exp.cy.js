describe('dfg', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })
    it('drtfg', () => {

        cy.visit('https://www.wikipedia.org/')

        var techh; // Declare the variable only once here
        cy.get('[class="other-project-title jsl10n"]').eq(3).then((tec) => {
            techh = tec.text() // Update the existing variable instead of redeclaring
            cy.log(techh)
        })

        cy.get('a').contains('Commons').click()
        cy.origin('https://commons.wikimedia.org/wiki/Main_Page',()=>{

        cy.url().should('eq', 'https://commons.wikimedia.org/wiki/Main_Page')

        cy.get('[class="extiw"]').eq(8).then((txt) => {
            var name = txt.text()
            cy.log(name)
            
        })
        })
        var name;
        if (techh == name) {
                cy.log("it printed")
            } else {
                cy.log('whoops')
            }
    })
})
