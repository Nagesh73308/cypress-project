class addemploye{
    firstName(firstName){
        return cy.get('[placeholder="First Name"]').type(firstName)

    }
    lastName(lastName){
        return cy.get('[placeholder="Last Name"]').type(lastName)

    }

    submit(){
        return cy.get('[type="submit"]').click()

    }


}
const Addemployedata=new addemploye()
export default Addemployedata