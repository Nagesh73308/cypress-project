class register{
    firstnameinput(){
        return '//input[@placeholder="First Name"]'
    }
    lastnameinput(){
        return '//input[@placeholder="Last Name"]'
    }
    addressbar(){
        return '//textarea[@ng-model="Adress"]'
    }
    emailmenu(){
        return '//input[@type="email"]'

    }
    phonenumberinput(){
        return '//input[@type="tel"]'
    }
    radiobutton(){
        return '//input[@name="radiooptions" and @value="Male"]'
    }
    checkbox(){
        return '//input[@id="checkbox1"]'
    }
    languagemenu(){
        return '//div[@id="msdd"]'
    }
    selectlanguage(){
    return '[style="display: block;"]>ul'
     }
    skillsdropdown(){
        return '//select[@id="Skills"]'
    }
    countrydropdown(){
        return '//select[@id="countries"]'
    }
    clickselectcountry(){
        return '//span[@aria-labelledby="select2-country-container"]'
    }
    selectcountry(){
        return '[id="select2-country-results"]'
    }
    year(){
        return '//select[@id="yearbox"]'
    }
    month(){
        return '//select[@placeholder="Month"]'
    }
    day(){
        return '//select[@id="daybox"]'
    }
    passwordmenu(){
        return '//input[@id="firstpassword"]'
    }
    conformpassword(){
        return '//input[@id="secondpassword"]'
    }
    submitbutton(){
        return '//button[@id="submitbtn"]'
    }




}
const registerpage=new register()
export default registerpage