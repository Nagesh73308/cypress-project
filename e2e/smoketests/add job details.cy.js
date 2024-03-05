import data from '../../fixtures/addjobtitle.json'
describe("test suit(login functionality)",()=>{
    it.only("test cases(verify the login with valied details)",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').first().type(data.userName)
        cy.get('[name="password"]').last().type(data.password)
        cy.get('[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.wait(20000)
        cy.contains('Job Titles',{'timeout':1000}).click()
        cy.contains(' Add ').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('[class="oxd-input oxd-input--active"]').eq(1).type(data.employename + r)
        cy.get('[placeholder="Type description here"]').type(data.jobtitle)
        cy.contains(' Save ').click()
        cy.contains('Successfully Saved').should('be.visible')
    })
})