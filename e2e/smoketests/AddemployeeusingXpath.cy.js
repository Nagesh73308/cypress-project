//import { contains } from 'cypress/types/jquery'
//import logindata from '../../fixtures/login details.json'
//import logindatacreds from '../page/loginpagecreds.po'
//importing the datd from fixtures 
describe("test sute",()=>{
    //for(let i=0;i<9;i++){
    it("test cases1",()=>{
        //const newBaseUrl = "https://newexample.com";
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath('//p[text()="Time at Work"]').should('be.visible')
        cy.xpath('//span[text()="PIM"]').click()
        cy.xpath('//a[text()="Add Employee"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.xpath('//input[@placeholder="First Name"]').type('Nagesh'+r)
        cy.xpath('//input[@placeholder="Last Name"]').type('nageshhh'+r)
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath('//p[text()="Successfully Saved"]').should('be.visible')
    })
})