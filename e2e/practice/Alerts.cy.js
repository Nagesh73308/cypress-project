
describe('Alert test sute',()=>{
    beforeEach('launch url',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })


    it("Alert test cases",()=>{
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.equal('I am a JS Alert')
            return true;
        })

    })
    it("Alert test cases",()=>{
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(alert)=>{
            expect(alert).to.equal('I am a JS Confirm')
            return true;
        })

    })
    it("Alert test cases",()=>{
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Nagesh")
            cy.contains('Click for JS Prompt').click()

        })
        
        })
        it("Alert test cases",()=>{
            cy.window().then((win)=>{
                cy.stub(win,'prompt').callsFake(()=>null)
                cy.contains('Click for JS Prompt').click()
    
            })
            
            })

    })
