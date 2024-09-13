describe('intercept data',()=>{
    it('moking with intercept',()=>{
        cy.visit('https://demowebshop.tricentis.com');
        cy.intercept('GET','/register',{fixture:'loginfix.json'}).as('posts')
        cy.get('.ico-register').click()

        cy.wait('@posts')
       
    })

})