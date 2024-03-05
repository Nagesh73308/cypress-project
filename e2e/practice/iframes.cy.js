describe('iframe testsute',()=>{
    Cypress.on("uncaught:exception", () => {
        return false;
        });
    it('iframe testcase',()=>{
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get('#singleframe').then(($iframe)=>{
        let checkbox1=$iframe.contents().find('.col-xs-6.col-xs-offset-5>input').eq(0)
        cy.wrap(checkbox1).type('hcghcfxdhghgf')
        })
    })
    it.only('iframesecond',()=>{
        cy.visit('https://www.hyrtutorials.com/p/frames-practice.html')
        cy.get('#frm1').then(($iframe)=>{
            let resp=$iframe.contents().find('#selectnav2')
            cy.wrap(resp).select('Contact')
        })
        cy.get('#frm1').then(($iframe)=>{
            let resp1=$iframe.contents().find('#selectnav1')
            cy.wrap(resp1).select('- Dot Net',{force:true})
            //cy.get('[class="post-home-image"]').should('be.visible')
        })
    })
})