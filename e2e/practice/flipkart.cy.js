describe("test suit()",()=>{
    it.only("test cases",()=>{
        cy.viewport(1920,1080)
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3sdu8W emupdz"]').then((resp)=>{
            let res=resp.text()
            cy.log(res)
        
        })
        cy.get('[placeholder="Search for Products, Brands and More"]').type('iphones{enter}')
        cy.get('[data-id="MOBGTAGPNMZA5PU5"]>div>a').invoke('removeAttr','target').click()
        cy.pause()
        // cy.contains('Add to cart').click({force:true})
        cy.get('form > ._2KpZ6l').click()
        //cy.get('[class="_2nQDXZ"]').should('be.visible')
    })
})