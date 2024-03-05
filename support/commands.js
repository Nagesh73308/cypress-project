// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
/// <reference types="cypress-xpath" />
//import crds from '../page/loginpage.po'


Cypress.Commands.add('loginCustomCom', (userName, password) => { 
        login.userName(userName)
        login.password(password)
        login.button()
        cy.contains('Dashboard').should('be.visible')
        //cy.contains('PIM').click()
    
})
import addemploye from '../page/addemploye.po'

Cypress.Commands.add('addempCustomCom', (firstName, lastName) => {
    empdata.firstName(firstName)
    empdata.lastName(lastName)
    empdata.submit()






})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })