import logindata from '../../fixtures/login details.json'
import crds from '../../page/loginpage.po'
import addemploye from '../../page/addemploye.po'
const login=new crds()
const empdata=new addemploye()
//importing the datd from fixtures 
describe("test sute",()=>{
    it("test cases1",()=>{
        //const newBaseUrl = "https://newexample.com";
        cy.visit(Cypress.env('endUrl'))
        cy.loginCustomCom(logindata.userName,logindata.password)
        cy.contains('PIM').click()
      
        cy.contains('Add Employee').should('have.text',"Add Employee").click()
        
        cy.addempCustomCom(logindata.firstName,logindata.lastName)
        cy.contains('Successfully Saved').should('be.visible')
        
    })
})