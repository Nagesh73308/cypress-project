import demopage1 from "../../page/automation online testing.po"
describe('test sute',()=>{
    it('test cases',()=>{
        cy.visit('https://automationintesting.online/')
        cy.get(demopage1.firstnameinput()).type('Nagesh')
        cy.get(demopage1.emailinput()).type('hcgcd@gmail.com')
        cy.get(demopage1.phonenumber()).type('987654321047664')
        cy.get(demopage1.subjectmenu()).type('gfdshdruyc')
        cy.get(demopage1.dicriptionbar()).type('xfdfctweukccvdcdcdcc')
        cy.get(demopage1.submitbutton()).click()
        cy.contains(demopage1.display_message).should('be.visible')
    })
})
