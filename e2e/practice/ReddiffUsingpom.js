import data from '../../fixtures/redifmail.json'
import regicreds from '../../page/Reddiffpage.po'
describe('redifmail functionality',()=>{
    it('testcases for reddiffmail',()=>{
        cy.visit(cypress.env(baseUrl))
        cy.get(regicreds.firstname()).type(data.fullName)
        cy.get(regicreds.mailid()).type(data.Rediffmail_ID)
        cy.get(regicreds.clickAvailability).click()
        cy.contains(regicreds.Assertion).should('be.visible')
        cy.get(regicreds.Enterpassword()).type(data.Password)
        cy.get(regicreds.RetypePasswordcreds()).type(data.Retypepassword)
        cy.get(regicreds.alternatemail()).type(data.AlternateEmailAddress)
        cy.get(regicreds.mobilenumber()).type(data.MobileNo)
        cy.get(regicreds.selectDay()).select(data.date)
        cy.get(regicreds.selectmonth()).select(data.month)
        cy.get(regicreds.selectYear()).select(data.year)
        cy.get(regicreds.selectGender()).click()
        cy.get(regicreds.selectCountry()).select(data.Country)
        cy.get(regicreds.selectcyty()).select(data.City)

    })
})