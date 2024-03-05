//import { describe } from "mocha";

describe('test sute',()=>{
    it('test cases',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       // for(let i=0;i<=30;i+2){
        cy.xpath('//button[text()="ADD TO CART"]').click({multiple:true})
       // }
    })
})