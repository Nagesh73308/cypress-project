describe("test suit()",()=>{
    it.only("test cases",()=>{
        cy.viewport(1920,1080)
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3sdu8W emupdz"]').then((resp)=>{
            let res=resp.text()
            cy.log(res)
        
        })
        //cy.scrollTo('bottom')
        cy.get('[href="/corporate-information"]').scrollIntoView().should('be.visible')
        //cy.contains('TVs & Appliances').scrollTo('center')
    })
})