import registerpage from "../../page/registerpage.po"
describe('test sute(for the register mail)',()=>{
    it("test cases for the register",()=>{
        Cypress.on("uncaught:exception", () => {
            return false;
            });  
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.xpath(registerpage.firstnameinput()).type('Nagesh')
        cy.xpath(registerpage.lastnameinput()).type('nag')
        cy.xpath(registerpage.addressbar()).type('fwdfevfwbvjrhvwerfejkfe')
        cy.xpath(registerpage.emailmenu()).type('nageshmahes1191@gmail.com')
        cy.xpath(registerpage.phonenumberinput()).type('9876543210')
        cy.xpath(registerpage.radiobutton()).click()
        cy.xpath(registerpage.checkbox()).check()
        cy.xpath(registerpage.languagemenu()).click({force:true})
        //cy.pause()
        // cy.get(registerpage.selectlanguage()).click().contains('Czech').click()
        // cy.get('#msdd').click({force:true})
        // //cy.get('ul.ui-autocomplete li').contains('Czech').click()
        // cy.pause()
        cy.xpath(registerpage.skillsdropdown()).select('Adobe Photoshop')
        cy.xpath(registerpage.countrydropdown()).select('')
        cy.xpath(registerpage.clickselectcountry()).click()
        cy.get(registerpage.selectcountry()).contains('Australia').click()
        cy.xpath(registerpage.year()).select('1928')
        cy.xpath(registerpage.month()).select('April')
        cy.xpath(registerpage.day()).select('4')
        cy.xpath(registerpage.passwordmenu()).type('mmmmmm@1234')
        cy.xpath(registerpage.conformpassword()).type('mmmmmm@1234')
        cy.xpath(registerpage.submitbutton()).click()

    })
})