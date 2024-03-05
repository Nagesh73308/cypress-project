import login from '../../page/loginpage1.po'
import addemployee from '../../page/Addemp.po'
import emplistdetails from '../../page/employee_list.po'
describe("test suit(login functionality)",()=>{

  before('this is the before each method',()=>{
    cy.log("this will execute before executind all the test cases")
  })
  beforeEach('this is before each',()=>{
    cy.visit(Cypress.env('endUrl'))
  })
  afterEach('this is before each',()=>{
    cy.log(Cypress.mocha.getRunner().suite.ctx.currentTest.title+"completed")
  })
  after('this is after method',()=>{
    cy.log("this will execute after executind all the test cases")
  })
  var arr=["Admin","admin123"]
  it.only("test cases(verify the login with valied details)",()=>{
    Cypress.on("uncaught:exception", () => {
      return false;
      });
      //cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
      cy.get(login.username()).type(arr[0])
      cy.get(login.password()).type(arr[1])
      cy.get(login.submitbutton()).click()
      cy.contains(login.dashboard()).should('be.visible')
      cy.contains(login.pimmodule()).click()
      cy.contains(addemployee.Addemploye()).click()
      var r = (Math.random() + 1).toString(36).substring(3);
      cy.get(addemployee.employeeFirstName()).type('nagesh'+r)
      cy.get(addemployee.employeeSecondName()).type('nag'+r)
      cy.get(addemployee.submitButton()).click()
      cy.contains('Successfully Saved').should('be.visible')
      cy.contains(emplistdetails.employelistmenu()).click()
      
      cy.get(emplistdetails.employeename()).eq(0).type('nagesh'+r)
      //cy.pause()
       cy.contains(emplistdetails.searchmenu()).click()
       cy.get(emplistdetails.clickOnCheckbox()).eq(1).click()
       cy.contains(emplistdetails.clickonDelete()).click()
       cy.contains(emplistdetails.clicOnYesDelete()).click()
       cy.contains(emplistdetails.successfulMessage()).should('be.visible')

   

      
  
      




      
      //cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
  
  })
  // it("test cases(verify the login with invalid user name and valid password  details)",()=>{
  //     var creds={
  //       userName :"Admin",
  //       password :"admin123vnvj"
  //     };
  //     //cy.visit(Cypress.env('endUrl'))
  //     cy.get('[name="username"]').first().type(creds.userName)
  //     cy.get('[name="password"]').last().type(creds.password)
  //     cy.get('.oxd-button').click()
  //     //cy.get('[class="oxd-main-menu-item active"]').should('be.visible')
  //     cy.contains('Invalid credentials').should('be.visible').and('have.text','Invalid credentials')
  
  // })
  // it("test cases(verify the login with valid user name and invalid password details)",()=>{
  //     //cy.visit(Cypress.env('endUrl'))
  //     cy.get('[class="oxd-input oxd-input--active"]').first().type('Admin')
  //     cy.get('[class="oxd-input oxd-input--active"]').last().type('Admin123dvgfg')
  //     cy.get('.oxd-button').click()
  //     cy.contains('Invalid credentials').should('be.visible').and('have.text','Invalid credentials')
  //     //cy.get('oxd-text oxd-text--p oxd-alert-content-text').should('be.visible')
  
  // })
  // it("test cases(verify the login with out entering details details)",()=>{
  //     //cy.visit(Cypress.env('endUrl'))
  //     cy.get('[class="oxd-input oxd-input--active"]').first().type(' ')
  //     cy.get('[class="oxd-input oxd-input--active"]').last().type(' ')
  //     cy.get('.oxd-button').click()
   
  
  // })
  // it("test cases(verify the login with invalid user name and invalid password  details)",()=>{
  //     //cy.visit(Cypress.env('endUrl'))
  //     cy.get('[class="oxd-input oxd-input--active"]').first().type('Admin166666')
  //     cy.get('[class="oxd-input oxd-input--active"]').last().type('admin1234')
  //     cy.get('.oxd-button').click()
  //     cy.contains('Invalid credentials').should('be.visible')
      
  
  // })
})