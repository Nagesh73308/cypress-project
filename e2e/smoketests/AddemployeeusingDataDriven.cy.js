import logindata from '../../fixtures/login details.json'
import login from '../../page/loginpage1.po'
import addemployee from '../../page/Addemp.po'

// //importing the datd from fixtures 
const fixtureNames=[
    {
        "name":"datadriven/Mahesh",
        "context":"1"

    },
    {
        "name":"datadriven/Nagamani",
        "context":"2"
    },
    {
        "name":"datadriven/Raju",
        "context":"3"
    },
    {
        "name":"datadriven/Swetha",
        "context":"4"
    },
    {
        "name":"datadriven/Ravi",
        "context":"5"
    },
    {
        "name":"datadriven/Ramu",
        "context":"6"
    }
]

describe("test sute",function (){
    fixtureNames.forEach((afixture)=>{
        describe(afixture.context,()=>{
            before(function (){
                cy.fixture(afixture.name).then((data)=>{
                    this.data=data;
                })
            })

            it("test cases1",function (){
                
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get(login.username()).type(logindata.userName)
                cy.get(login.password()).type(logindata.password)
                cy.get(login.submitbutton()).click()
                cy.contains(login.dashboard()).should('be.visible')
                cy.contains(login.pimmodule()).click()
                cy.contains(addemployee.Addemploye()).click()
                cy.get(addemployee.employeeFirstName()).type(this.data.firstName)
                cy.get(addemployee.employeeSecondName()).type(this.data.lastName)
                cy.get(addemployee.submitButton()).click()
                cy.contains(addemployee.Successfulmessage).should('be.visible')
        
            })
        
        })
    })
    
    
})