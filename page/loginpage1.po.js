class loginpagecreds{
    username(){
        return '[placeholder="Username"]'

    }
    password(){
        return '[placeholder="Password"]'
    }
    submitbutton(){
        return '[type="submit"]'
    }
    dashboard(){
        return 'Dashboard'
    }
    pimmodule(){
        return 'PIM'
    }
    // Addemploye(){
    //     return 'Add Employee'
    // }
    // Successfulmessage="Successfully Saved"

}
const login=new loginpagecreds()
export default login