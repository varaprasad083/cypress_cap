describe('Data Management', () => {

    it('Use fixtures to manage test data', ()=>{

    cy.visit('https://demowebshop.tricentis.com/')

    cy.fixture('loginfix').then( (data)=>{

    cy.login(data.uname,data.pass)

    cy.get('.topic-html-content-header').should('contain.text',data.result)

    })

    })
})



// describe('Data Management with Fixtures', () => {
//     it('should load product data from fixture', () => {
//         // Load the fixture file
//         cy.fixture('product').then((product) => {
//             // Use fixture data in test
//             cy.visit('https://demowebshop.tricentis.com');
//             cy.intercept('GET', '/25-virtual-gift-card', product).as('getProduct');
           
//            cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2').click()
   
//         });
//     });
// });
