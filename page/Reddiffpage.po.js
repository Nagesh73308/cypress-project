class creds{
    firstname(){
        return 'input[name^="name"]'
    }
    mailid(){
        return '[name^="login"]'
    }
    clickAvailability='[value="Check availability"]'
    Assertion="Yippie! The ID you've chosen is available."
    Enterpassword(){
        return '#newpasswd'
    }
    RetypePasswordcreds(){
        return'#newpasswd1'
    }
    alternatemail(){
        return '[name^="altemail"]'
    }
    mobilenumber(){
        return '#mobno'
    }
    selectDay(){
        return '[name^="DOB_Day"]'
    }
    selectmonth(){
        return '[name^="DOB_Month"]'
    }
    selectYear(){
        return '[name^="DOB_Year"]'
    }
    selectGender(){
        return 'input[name^="gender"][value="f"]'
    }
    selectCountry(){
        return '#country'
    }
    selectcyty(){
        return '[name^="city"]'
     
    }

}
const regicreds=new creds()
export default regicreds