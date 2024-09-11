describe('product search and verify the search result',()=>{
    it('product seaching',()=>{
        cy.visit('https://demowebshop.tricentis.com/')

        //if the product is avaliable
        cy.get("#small-searchterms").type('diamond{enter}')
        cy.get('.search-results').should('not.contain','No products were found that matched your criteria.')
        cy.xpath("//a[normalize-space()='Black & White Diamond Heart']").should('have.text','Black & White Diamond Heart')

        cy.get("#small-searchterms").type('camera{enter}')
        cy.get('.search-results').should('not.contain','No products were found that matched your criteria.')
        cy.xpath("//a[normalize-space()='Digital SLR Camera 12.2 Mpixel']").should('have.text','Digital SLR Camera 12.2 Mpixel')

        cy.get("#small-searchterms").type('bag')
        cy.get('.search-results').should('not.contain','No products were found that matched your criteria.')
        cy.xpath("//a[contains(text(),'Genuine Leather Handbag with Cell Phone Holder & M')]").should('have.text','Genuine Leather Handbag with Cell Phone Holder & Many Pockets')

        //if the product is not avaliable
        cy.get("#small-searchterms").type('notAvaliable{enter}')
        cy.get('.search-results').should('contain','No products were found that matched your criteria.')
     

    })
})