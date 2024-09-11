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
// Cypress.Commands.add('login', (email, password) => { ... })
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

/// <reference types="cypress" />
require('cypress-xpath');

const compareSnapshotCommand = require('cypress-image-diff-js/command');
compareSnapshotCommand({
    threshold: 0.5, 
  failureThresholdType: 'percent', 
  failureThreshold: 0.1,
  
});


//Custom command to add to cart

Cypress.Commands.add('addToCart',(productName,url)=>{
    cy.get('.product-title > a').contains(productName).click()
    cy.url().should("include",url)
    cy.get("input[value='Add to cart']").eq(0).click()
    cy.get('.content').should("contain","The product has been added to your ")
    cy.go('back')
})

//login

// Custom command to log in with email and password
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://demowebshop.tricentis.com/login');
    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get('.login-button').click();
});


