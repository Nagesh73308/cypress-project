class addemployee_details{


    employeeFirstName(){
        return '[placeholder="First Name"]'
    }
    employeeSecondName(){
        return '[placeholder="Last Name"]'
    }
    submitButton(){
        return '[type="submit"]'
    }
    Addemploye(){
        return 'Add Employee'
    }
    Successfulmessage="Successfully Saved"
    

}
const addemployee=new addemployee_details()
export default addemployee