
describe("test sute(registration functionalality)",()=>{
    it("test cases(enter all mandetary fields)",()=> {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('[onblur="fieldTrack(this);"]').eq(0).type('Nagesh Bandi')
        cy.get('[onblur="fieldTrack(this);"]').eq(1).type('ndtyf')
        cy.get('[class="btn_checkavail"]').click()
        cy.contains("Yippie! The ID you've chosen is available.").should('be.visible')
        cy.get('[id="newpasswd"]').type('rrrrvvv11@gmail.com')
        cy.get('[id="eyeiconNew"]').click()
        cy.get('[id="newpasswd1"]').type('rrrrvvv11@gmail.com')
        cy.get('[id="eyeiconRe"]').click()
        cy.get('[onblur="fieldTrack(this);"]').eq(4).type('ramanju4532@gmail.com')
        cy.get('[class="nomargin"]').check()
        cy.get('[onchange="fieldTrack(this);"]').eq(0).select('What is the name of your first school?')
        cy.get('[onblur="fieldTrack(this);"]').eq(5).type('jalaja coment')
        cy.get('[onblur="fieldTrack(this);"]').eq(6).type('rathamma')
        cy.get('[id="mobno"]').type('9876543212')
        cy.get('[onchange="fieldTrack(this);"]').eq(1).select('12')
        cy.get('select[name^=DOB_Day]>option').then((resp)=>{
            const data = resp.text()
            cy.log(data)
        })
        cy.get('select[name^=DOB_Month]>option').then((resp)=>{
            let data = resp.text()
            cy.log(typeof data)
        })
        cy.get('select[name^=DOB_Year]>option').then((resp)=>{
            let data = resp.text()
            cy.log(data)
        })
        cy.get('select[name^=hintq]>option').then((resp)=>{
            let data=resp.text()
            cy.log(data)
        })
        
        cy.pause()
        cy.get('[onchange="fieldTrack(this);"]').eq(2).select('FEB')
        cy.get('[onchange="fieldTrack(this);"]').eq(3).select('2023')
        cy.get('[value="f"]').click()
        cy.get('[id="country"]').select('India')
        cy.get('[onchange="showothcity();fieldTrack(this);"]').select('Ahmedabad')
        cy.c



    })
})